import React from "react";
import Post from "../post/Post";
import { useAllPosts } from "../../hooks/usePosts";

const Posts = () => {
  const { data: posts = [], isLoading, error } = useAllPosts();
  return (
    <div className="flex flex-col gap-5">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center">
            <h1 className="text-4xl font-bold text-red-500">Something went wrong!</h1>
        </div>
      ) : (
        posts?.map((post) => <Post post={post} key={post.id} />)
      )}
    </div>
  );
};

export default Posts;
