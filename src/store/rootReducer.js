import { combineReducers } from 'redux';

const configReducer = (state = {}, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    config: configReducer,
});