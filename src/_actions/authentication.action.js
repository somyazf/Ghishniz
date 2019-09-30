import { authenticationConstants } from "../_constants";
import { authenticationService } from "../_service";
import Cookies from 'universal-cookie';
export const authenticationAction = {
    login,
    register
}


function login (login,password,history) {
    return dispatch => {
        dispatch(request());
        authenticationService.login(login,password).then(
            response => {
                dispatch(success(response));
                let cookie = new Cookies();
                cookie.set('username', response.name);
                history.push('/blog-overview');

            },
            error =>{
                dispatch(failed(''));
            }
        )
    }


    function request() { return { type: authenticationConstants.LOGIN_REQUEST }; }
    function success(user) { return { type: authenticationConstants.LOGIN_SUCCESS,user }; }
    function failed(error) { return { type: authenticationConstants.LOGIN_SUCCESS,error }; }
}

function register () {
    return {type: 'increment'};
}