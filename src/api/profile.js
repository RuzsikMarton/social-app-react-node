import { api } from "./client";

export const getProfileInfo = async (userId) => {
    const {data} = await api.get('users/find/' + userId);
    return data;
}