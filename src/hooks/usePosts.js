import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPost, getAllPosts } from "../api/posts";

export const useAllPosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
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
