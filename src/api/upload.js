import { api } from "./client";

export const upload = async (file) => {
    try{
        const formData = new FormData();
        formData.append("file", file);
        const res = await api.post('/upload', formData);
        return res.data;
    } catch(err) {
        console.log(err)
    }
}