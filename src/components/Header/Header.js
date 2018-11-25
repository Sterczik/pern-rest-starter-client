import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from '../../containers/App/auth/actions';

export const Header = ({ logout }) => (
    <header>
        <Link to="/dashboard">
            <h1>Hi</h1>
        </Link>
        <button onClick={logout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(authActions.logout())
});

export default connect(undefined, mapDispatchToProps)(Header);