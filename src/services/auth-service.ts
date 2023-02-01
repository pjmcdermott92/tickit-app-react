import api from './api';

type LoginProps = {
    email: string,
    password: string
};

const BASE_URL = import.meta.env.VITE_SERVER_URL;
const AUTH_URLS = {
    LOGIN: BASE_URL + '/auth'
}

export const loginUser = ({email, password} : LoginProps) => {
    const body = {
        email: email.toLowerCase(),
        password
    };

    return api.post(AUTH_URLS.LOGIN, body);
}
