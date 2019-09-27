import {TIMEOUT_DELAY,HOST} from '../_constants';
import axios from 'axios';

export const getDataService = {
    fetchRecipes
}

async function fetchRecipes(query) {
let timeout = null;
  try{
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();
      timeout = setTimeout(()=>{source.cancel()},TIMEOUT_DELAY);
      const response = await axios({
          url: `${HOST}?apiKey=94be430aadf644f6a8c8c95abbcce4c1&query=${query}&number=100`,
          method: "GET",
          headers: { "content-type": "application/json" },
          cancelToken: source.token
      });
      
      if (response.status === 200) {
          if (timeout) clearTimeout(timeout);
          return response.data;
      } else {
          if (timeout) clearTimeout(timeout);
          return Promise.reject({isTimeout:false,error: response.data});
      }
  } catch (error) {
      if (timeout) clearTimeout(timeout);
      if (axios.isCancel(error)) {
        return Promise.reject({isTimeout:true});
      } else {
        return Promise.reject({isTimeout:false,error});
      }
  }
}