import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

export const UnauthenticatedHeader = () => {
    return (
        <nav>
            <NavLink to='/dashboard'>
                <Icon
                    color='violet'
                    name='address book outline'
                    size='large'
                    />
            </NavLink>
        </nav>
    );
}

export default withRouter(connect()(UnauthenticatedHeader));