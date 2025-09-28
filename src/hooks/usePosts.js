import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../api/posts";

export const useAllPosts = () => useQuery({
    queryKey: ['posts'],
    queryFn: getAllPosts,
  });