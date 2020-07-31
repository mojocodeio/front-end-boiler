import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { middleware } from './middleware';
const initialState = {};

export const store = createStore(
    rootReducer,
    initialState,
    middleware,
)