import { getDataConstants } from "../_constants";
import { getRecipesInfoService } from "../_service";

export const getRecipesInfoAction = {
    getRecipesInfo
}
function getRecipesInfo(id) {
    return dispatch => {
        dispatch(loading());
        getRecipesInfoService.getRecipesInfo(id).then(
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

