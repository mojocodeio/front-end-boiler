import React from 'react';
import { connect } from 'react-redux';

/** components */
import AuthenticatedHeader from './AuthenticatedHeader/AuthenticatedHeader';
import UnauthenticatedHeader from './UnauthenticatedHeader/UnauthenticatedHeader';

export const Header = ({
    isAuthenticated
}) => {
    if (isAuthenticated) {
        return (
            <AuthenticatedHeader />
        );
    }

    return (
        <UnauthenticatedHeader />
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Header);