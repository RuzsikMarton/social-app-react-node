import { api } from "./client.js"

export const getLikes = async (postId) => {
    const { data } = await api.get('/likes?postId='+postId);
    return data;
}

export const postLike = async (postId) => {
    const {data} = await api.post('/likes', {postId: postId});
    return data;
}

export const deleteLike = async (postId) => {
    const { data } = await api.delete('/likes?postId='+ postId)
    return data;
}