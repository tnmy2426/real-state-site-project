
import { SIGNIN_SUCCESS, SIGNIN_FAIL, SIGNUP_SUCESS, SIGNUP_FAIL, LOGOUT } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case SIGNIN_SUCCESS:
            localStorage.setItem('token', payload.access);
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                token: payload.access
            }

        case SIGNUP_SUCESS:
            return{
                ...state,
                isAuthenticated: false,
                loading: true
            }

        case SIGNUP_FAIL:
        case SIGNIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }

        default:
            return state
    }
}