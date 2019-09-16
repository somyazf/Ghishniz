import { combineReducers } from "redux";
import { getDataReducer } from "./getData.reducer";
import { authentication } from "./authentication.reducer";
const rootReducer = combineReducers({
    getDataReducer,
    authentication
});

export default rootReducer;
