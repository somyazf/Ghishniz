import { getDataConstants } from "_constants";
import { uploadFileService } from "_service";

export const uploadFileAction = {
    uploadImage
}

function uploadImage(image) {
    return dispatch => {
        dispatch(loading());
        uploadFileService.uploadImage(image).then(
            response => {
                dispatch(success(response));
            },
            error =>{
                dispatch(failed(error));
            }
        )
    }

    function loading() { 
        return { type: getDataConstants.FETCH_RECIPES_LOADING }; 
    }
    function success(data) { 
        return { type: getDataConstants.FETCH_RECIPES_SUCCESS, data }; 
    }
    function failed(error) { 
        return { type: getDataConstants.FETCH_RECIPES_FAILED, error }; 
    }
}


