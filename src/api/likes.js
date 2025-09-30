import { api } from "./client.js"

export const getLikes = async (postId) => {
    const { data } = await api.get('/likes?postId='+postId);
    return data;
}