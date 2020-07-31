import React from 'react';
import { Button } from 'semantic-ui-react';

export const Header = () => {
    return (
        <div className={'header'}>
            I am the Header
            <Button primary>
                Hello Semantic
            </Button>
        </div>
    );
}

export default Header;