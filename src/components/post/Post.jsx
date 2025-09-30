import { useContext, useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";
import "./post.css";
import Comments from "../comment/Comments";
import moment from 'moment'
import { useGetLikes } from "../../hooks/useLikes";
import { useGetComments } from "../../hooks/useComments";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false)

  const {currentUser} = useContext(AuthContext);
  const { data: likes = [], isLoading: loadingLike, error: errLike} = useGetLikes(post.id);
  const { data: comments = [], isLoading: loadingComment, error: errComment} = useGetComments(post.id);

  const handleLike = () => {
    
  }

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
            <div className="item" onClick={handleLike}>
                {likes.includes(currentUser.id) ? <FavoriteOutlinedIcon className="text-red-500" /> : <FavoriteBorderOutlinedIcon />}
                {likes.length} Likes
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                <TextsmsOutlinedIcon />
                {comments.length} Comments
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
