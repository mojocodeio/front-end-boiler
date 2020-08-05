import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

export const ProtectedRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated) {
                    return (
                        <Component {...props} />
                    )
                }

                <Redirect
                    to='/'
                />
            }}
        />
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default withRouter(connect(mapStateToProps)(ProtectedRoute));
