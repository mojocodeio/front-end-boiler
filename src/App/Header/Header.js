import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export const Header = () => {
    return (
        <div>
            <NavLink to='/dashboard'>
                <Button primary>
                    Dashboard
                </Button>
            </NavLink>

            <NavLink to='/login'>
                <Button primary>
                    Login
                </Button>
            </NavLink>
        </div>
    );
}

export default Header;