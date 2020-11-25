import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import { setAlert } from '../actions/alert';
import PropTypes from 'prop-types';

const SignUp = ({ setAlert, signup, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== password2) {
            setAlert('Password not matched!!', 'error');
        } else {
            signup({ name, email, password, password2 });
        };
    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    };

    return (
        <div className='signup_page'>
            <Helmet>
                <title>Realest | SignUp</title>
                <meta name='description' content='signup OR registration page' />
            </Helmet>
            <h1 className='signup_page_title'>Sign Up</h1>
            <p className='signup_page_subtitle'>Create your account</p>
            <form className='signup_form' onSubmit={onSubmit} >
                <div className='signup_form_div'>
                    <input className='signup_form_input'
                        type='text'
                        name='name'
                        value={name}
                        placeholder='Enter your name'
                        onChange={e => onChange(e)}
                        required />
                </div>
                <div className='signup_form_div'>
                    <input className='signup_form_input'
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Enter your email'
                        onChange={e => onChange(e)}
                        required />
                </div>
                <div className='signup_form_div'>
                    <input className='signup_form_input'
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Choose your password'
                        onChange={e => onChange(e)}
                        minLength='6' />
                </div>
                <div className='signup_form_div'>
                    <input className='signup_form_input'
                        type='password'
                        name='password2'
                        value={password2}
                        placeholder='Confirm your password'
                        onChange={e => onChange(e)}
                        minLength='6' />
                </div>
                <div className='signup_form_div'>
                    <button className='signup_btn'>Register</button>
                </div>
            </form>
            <div className='signup_form_div'>
                <p className='signup_form_footer'>Already have an account? <Link className='signup_link' to='/signin'>Login Here</Link> </p>
            </div>
        </div>
    )
};

SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, signup })(SignUp)
