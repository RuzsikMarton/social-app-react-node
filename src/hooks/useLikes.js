import { useQuery } from "@tanstack/react-query"
import { getLikes } from "../api/likes"

export const useGetLikes = (postId) => {
    return useQuery({
        queryKey: ["likes", postId],
        queryFn: () => getLikes(postId),
        enabled: !!postId,
    })
}