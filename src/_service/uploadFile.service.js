import {TIMEOUT_DELAY, AUTHHOST} from '../_constants';
import Axios from 'axios';

export const uploadFileService = {
    uploadImage
}

async function uploadImage(image) {
  try{
    const response = await Axios({
        method: 'post',
        url: `${AUTHHOST}/files/image/${image}?overwrite=true`,
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      if (response.status === 200){
        console.log('response from add post is ', response);
        return response.data;
      }
    } catch (error){
      console.log(error.response);
    }
}