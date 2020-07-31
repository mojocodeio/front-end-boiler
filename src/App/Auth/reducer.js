import {
    USER_LOGIN,
    USER_LOGOUT,
} from './actions';

const initialState = {
    isAuthenticated: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isAuthenticated: true,
            }
        case USER_LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
            }
        default:
            return state;
    }
};

export default authReducer;