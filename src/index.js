import React from 'react';
import { render } from 'react-dom';
import  { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/** redux store */
import { store } from './store/store';

/** components */
import App from './App/App';

/** global styles */
import './styles.global.css';

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

