import { api } from "./client";

export const getComments = async (postId) => {
  const { data } = await api.get("/comments?postId=" + postId);
  return data;
};

export const addComment = async (payload) => {
  const res = await api.post("/comments", payload);
  return res;
};
