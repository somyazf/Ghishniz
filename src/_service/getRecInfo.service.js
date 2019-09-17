import {TIMEOUT_DELAY, RecipeInformationHost, apiKey} from '../_constants';
import axios from 'axios';

export const getRecipesInfoService = {
    getRecipesInfo
}

async function getRecipesInfo(id) {
let timeout = null;
  try{
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();
      timeout = setTimeout(()=>{source.cancel()},TIMEOUT_DELAY);
      debugger
      const response = await axios({
          url: `${RecipeInformationHost}${id}/information?apiKey=${apiKey}`,
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