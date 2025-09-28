import {api} from './client'

export const getAllPosts = async () => {
    const {data} = await api.get('/posts');
    return data;
}
