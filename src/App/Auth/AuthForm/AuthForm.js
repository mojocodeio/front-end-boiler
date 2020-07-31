import React from 'react';
import { connect } from 'react-redux';

/** components */
import { Form, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

/** actions */
import { handleUserLogin } from '../actions';

export const AuthForm = ({
    handleUserLogin,
    isAuthenticated,
}) => {
    if (isAuthenticated) {
        return (
            <Redirect to='/dashboard' />
        );
    }
    return (
        <Form>
            <Button
                onClick={handleUserLogin}
                size='large'
                color='violet'
            >
                Click Here To Login!
            </Button>
        </Form>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = {
    handleUserLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)