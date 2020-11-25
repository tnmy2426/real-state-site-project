import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { signin } from '../actions/auth';
import PropTypes from 'prop-types';


const Signin = ({ signin, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        signin(email, password)
    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    };

    return (
        <div className='signup_page'>
            <Helmet>
                <title>Realest | Signin</title>
                <meta name='description' content='signin OR login page' />
            </Helmet>
            <h1 className='signup_page_title'>Sign In</h1>
            <p className='signup_page_subtitle'>Sign into your account</p>
            <form className='signup_form' onSubmit={onSubmit} >
                <div className='signup_form_div'>
                    <input className='signup_form_input'
                        type='email'
                        name='email'
                        value={email}
                        placeholder='Enter your email'
                        onChange={onChange}
                        required />
                </div>
                <div className='signup_form_div'>
                    <input className='signup_form_input'
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Enter your password'
                        onChange={onChange}
                        minLength='6' />
                </div>
                <button className='signup_btn'>Sign In</button>
            </form>
            <div className='signup_form_div'>
                <p className='signup_form_footer'>Don't Have an account? <Link className='signup_link' to='/signup'>Register Here</Link> </p>
            </div>
        </div>
    );
};

Signin.propTypes = {
    signin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) =>({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signin })(Signin)
