import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {getRelationship, deleteRelationship, addRelationship} from "../api/relationship.js"

export const useGetRelationship = (followedUserId) => {
  return useQuery({
    queryKey: ["relationships"],
    queryFn: () => getRelationship(followedUserId),
    enabled: !!followedUserId,
  });
};

export const useFollow = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ([userId, following]) => {
      if(following) {
        return deleteRelationship(userId);
      } else {
        return addRelationship(userId);
      } 
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["relationships"] });
    }
  });
}