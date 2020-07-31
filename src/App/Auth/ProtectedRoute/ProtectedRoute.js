import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    if (isAuthenticated) {
        return (
            <Route
                {...rest}
                render={props => <Component {...props} />}
            />
        )
    }
    return (
        <Redirect
            pathname='/'
        />
    );
};

const mapStateToProps = state => ({
    isAuthenticated: true,
})

export default connect(mapStateToProps)(ProtectedRoute)