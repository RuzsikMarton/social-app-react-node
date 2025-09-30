import { useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";
import "./post.css";
import Comments from "../comment/Comments";
import moment from 'moment'

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false)

    //Temp
    const liked = true;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic}></img>
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ color: "inherit" }}>
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={"/upload/"+post.img} alt="" />
        </div>
        <div className="interactions">
            <div className="item">
                {liked ? <FavoriteOutlinedIcon className="text-red-500" /> : <FavoriteBorderOutlinedIcon />}
                12 Likes
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                <TextsmsOutlinedIcon />
                Comment
            </div>
            <div className="item">
                <ShareOutlinedIcon />
                Share
            </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
