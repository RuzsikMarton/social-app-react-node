import { api } from "./client";

export const getProfileInfo = async (userId) => {
    const {data} = await api.get('users/find/' + userId);
    return data;
}

export const updateProfileInfo = async (payload) => {
    const res = await api.put('/users', payload);
    return res.data;
}