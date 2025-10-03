import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPost, getAllPosts, deletePost } from "../api/posts";

export const useAllPosts = (userId) =>
  useQuery({
    queryKey: ["posts", userId],
    queryFn: () => getAllPosts(userId),
  });

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => addPost(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => deletePost(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
