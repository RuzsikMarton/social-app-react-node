import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { addComment, getComments } from "../api/comments"

export const useGetComments = (payload) => {
  return useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const data = await getComments(payload);
      console.log(data);
      return data;
    },
    enabled: !!payload,
  });
};


export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => addComment(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
};
