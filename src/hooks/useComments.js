import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { addComment, getComments } from "../api/comments"

export const useGetComments = (postId) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn:  () => getComments(postId),
    enabled: !!postId,
  });
};


export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId) => addComment(postId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
};
