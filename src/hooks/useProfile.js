import { useQuery } from "@tanstack/react-query";
import { getProfileInfo } from "../api/profile";

export const useProfileInfo = (userId) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => getProfileInfo(userId),
    enabled: !!userId,
  });
};