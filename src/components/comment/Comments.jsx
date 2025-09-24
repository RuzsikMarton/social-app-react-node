import { useContext } from "react";
import "./comments.css"
import {AuthContext} from "../../context/AuthContext.jsx"

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

  const comments = [
    {
      id: 1,
      desc: "This is the first comment to a post.",
      name: "Kill Bill",
      userId: 1,
      profilePic: "/profile.jpg",
    },
    {
      id: 2,
      desc: "This is the second comment to a post.",
      name: "Kill Bill",
      userId: 1,
      profilePic: "/profile.jpg",
    },
  ];
  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="Write a comment" />
            <button>Send</button>
        </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
