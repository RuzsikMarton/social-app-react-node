import {api} from './client.js'

export const registerApi = async (payload) => {
    const {data} = await api.post('/auth/register', payload);
    return data;
}

export const loginApi = async (payload) => {
    const {data} = await api.post('/auth/login', payload, {withCredentials: true});
    return data;
}