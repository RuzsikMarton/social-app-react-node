import {api} from './client'

export const getAllPosts = async (userId) => {
    const url = userId ? `/posts?userId=${userId}` : '/posts';
    const {data} = await api.get(url);
    return data;
}

export const addPost = async (payload) => {
    const res = await api.post('/posts', payload);
    return res;
}
