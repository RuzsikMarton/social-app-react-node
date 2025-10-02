import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPost, getAllPosts } from "../api/posts";

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
