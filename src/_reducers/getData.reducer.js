import { getDataConstants } from "../_constants"

const initialState = {
    loading: false,
    items: {},
    error: null
}

export function getDataReducer(state = initialState, action) {
    switch(action.type) {
        case getDataConstants.FETCH_RECIPES_LOADING: 
            return {
                loading: true,
                error: null,
                items : {}
            }
        case getDataConstants.FETCH_RECIPES_SUCCESS:
            return {
                loading: false,
                items: action.data
            }
        case getDataConstants.FETCH_RECIPES_FAILED:
            return {
                loading: false,
                error: '',
                items: {}
            }
        default: 
        return state;
    }
}
// export const getRecipes = state => state.items;
// export const getRecipesloading = state => state.loading;
// export const getRecipesError = state => state.error;