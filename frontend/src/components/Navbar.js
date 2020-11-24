import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import PropTypes from 'prop-types';
import Alert from './Alert';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <a className='navbar_auth_link' onClick={logout} href='#!'>Logout</a>
    );

    const guestLinks = (
        <Fragment>
            <Link className="navbar_auth_link" to='/signin'>Sign In</Link>
            <Link className="navbar_auth_link" to='/signup'>Sign Up</Link>
        </Fragment>
    );

    return (
        <Fragment>
            <nav className='navbar_container'>
                <div className='navbar_top'>
                    <div className='navbar_logo'>
                        <Link className='navbar_logo_link' to='/'>Realest Society</Link>
                    </div>
                    <div className='navbar_top_auth'>
                        { !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
                    </div>
                </div>
                <div className="navbar_bottom">
                    <li className='navbar_bottom_item'>
                        <NavLink className='navbar_bottom_links' exact to='/'>Home</NavLink>
                    </li>
                    <li className='navbar_bottom_item'>
                        <NavLink className='navbar_bottom_links' exact to='/listings'>Listings</NavLink>
                    </li>
                    <li className='navbar_bottom_item'>
                        <NavLink className='navbar_bottom_links' exact to='/about'>About</NavLink>
                    </li>
                    <li className='navbar_bottom_item'>
                        <NavLink className='navbar_bottom_links' exact to='/contact'>Contact</NavLink>
                    </li>
                </div>
            </nav>
            <Alert />
        </Fragment>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar)
