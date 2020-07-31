import React from 'react';
import { render } from 'react-dom';
import  { Provider } from 'react-redux';

/** redux store */
import { store } from './store/store';

/** components */
import App from './App/App';

/** global styles */
import './styles.global.css';

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

