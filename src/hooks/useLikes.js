import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteLike, getLikes, postLike } from "../api/likes";

export const useGetLikes = (postId) => {
  return useQuery({
    queryKey: ["likes", postId],
    queryFn: () => getLikes(postId),
    enabled: !!postId,
  });
};

export const useLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ([postId, liked]) => {
      if (liked) {
        return deleteLike(postId);
      }
      return postLike(postId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["likes"] });
    },
  });
};
