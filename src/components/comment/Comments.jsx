import { useContext, useState } from "react";
import "./comments.css";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useAddComment, useGetComments } from "../../hooks/useComments.js";
import moment from "moment";

const Comments = ({postId} ) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);
  const { data = [], isLoading, error} = useGetComments(postId);
  const { mutate } = useAddComment();

  const handleClick = (e) => {
      e.preventDefault();
      mutate({ desc, postId });
    };

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser?.profilePic} alt="" />
        <input type="text" placeholder="Write a comment" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button onClick={handleClick}>Send</button>
      </div>
      {isLoading ? "Loading..." : data.map((comment) => (
            <div className="comment" key={comment.id}>
              <img src={comment.profilePic} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
