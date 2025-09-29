import {api} from './client'

export const getAllPosts = async () => {
    const {data} = await api.get('/posts');
    return data;
}

export const addPost = async (payload) => {
    const res = await api.post('/posts', payload);
    return res;
}
