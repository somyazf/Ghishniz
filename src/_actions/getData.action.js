import { getDataConstants } from "../_constants";
import { getDataService } from "../_service";

export const getDataAction = {
    fetchRecipes
}

function fetchRecipes(query) {
    return dispatch => {
        dispatch(loading());
        getDataService.fetchRecipes(query).then(
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


