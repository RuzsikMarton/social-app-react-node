import React from 'react'
import Post from '../post/Post'

const Posts = () => {
    const posts = [
        {
            id:1,
            name: "Kill Bill",
            userId: 1,
            profilePic: "/profile.jpg",
            desc: "This is the description of the first temporary post.",
            img: "/post.jpg"
        },{
            id:2,
            name: "Kill Bill",
            userId: 1,
            profilePic: "/profile.jpg",
            desc: "This is the description of the second temporary post.",
            img: "/post.jpg"
        }
    ]
  return (
    <div className="flex flex-col gap-5">
        {posts.map((post) => (
            <Post post={post} key={post.id} />
        ))}
    </div>
  )
}

export default Posts