import { combineReducers } from 'redux';

import authReducer from '../App/Auth/reducer';

export const rootReducer = combineReducers({
    auth: authReducer,
});