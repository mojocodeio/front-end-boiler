export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const handleUserLogin = () => {
    return {
        type: USER_LOGIN,
    }
}

export const handleUserLogout = () => {
    return {
        type: USER_LOGOUT,
    }
}