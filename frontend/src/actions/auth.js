import axios from 'axios';
import { SIGNUP_SUCESS, SIGNUP_FAIL, SIGNIN_SUCCESS, SIGNIN_FAIL, LOGOUT } from './types';
import { setAlert } from './alert';

export const signin = (email, password) => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password});

    try {
        const res = await axios.post('http://localhost:8000/api/token/', body, config);
        dispatch({
            type: SIGNIN_SUCCESS,
            payload: res.data
        });

        dispatch(setAlert('Authenticating successfully!', 'success'));
    } catch (err){
        dispatch({
            type: SIGNIN_FAIL
        });

        dispatch(setAlert('Error Authenticating', 'error'));
    }
}

export const signup = ({ name, email, password, password2 }) => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password, password2});

    try {
        const res = await axios.post('http://localhost:8000/api/accounts/signup', body, config);
        dispatch({
            type: SIGNUP_SUCESS,
            payload: res.data
        });

        dispatch(signin(email, password));
    } catch (err){
        dispatch({
            type: SIGNUP_FAIL
        });

        dispatch(setAlert('Error Authenticating', 'error'));
    }
}

export const logout = () => dispatch =>{
    dispatch(setAlert('Logout successful', 'success'));
    dispatch({
        type: LOGOUT
    });
}