import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getProfileInfo, updateProfileInfo} from "../api/profile";

export const useProfileInfo = (userId) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => getProfileInfo(userId),
    enabled: !!userId,
  });
};

export const useProfileUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => updateProfileInfo(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}