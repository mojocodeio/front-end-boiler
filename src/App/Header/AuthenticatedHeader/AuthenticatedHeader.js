import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

/** actions */
import { handleUserLogout } from '../../Auth/actions';

export const AuthenticatedHeader = ({
    handleUserLogout,
}) => {
    return (
        <nav>
            <NavLink to='/dashboard'>
                <Icon
                    color='violet'
                    name='address book outline'
                    size='large'
                    />
            </NavLink>
            <NavLink to='/profile'>
                <Icon
                    color='violet'
                    name='user circle outline'
                    size='large'
                    />
            </NavLink>
            <Button onClick={handleUserLogout}>
                Logout
            </Button>
        </nav>
    );
}

const mapDispatchToProps = {
    handleUserLogout,
}

export default withRouter(connect(null, mapDispatchToProps)(AuthenticatedHeader));