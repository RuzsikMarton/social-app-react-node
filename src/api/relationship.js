import { api } from "./client";

export const getRelationship = async (followedUserId) => {
    const {data} = await api.get('/relationships?followedUserId=' + followedUserId);
    return data;
}

export const addRelationship = async (followedUserId) => {
    const {data} = await api.post('/relationships', {followedUserId});
    return data;
}

export const deleteRelationship = async (followedUserId) => {
    const {data} = await api.delete('/relationships?followedUserId=' + followedUserId);
    return data;
}