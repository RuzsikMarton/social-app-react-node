import { useContext, useState, useRef, useEffect } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";
import "./post.css";
import Comments from "../comment/Comments";
import moment from 'moment'
import { useGetLikes, useLike } from "../../hooks/useLikes";
import { useGetComments } from "../../hooks/useComments";
import { AuthContext } from "../../context/AuthContext";
import { useDeletePost } from "../../hooks/usePosts";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const {currentUser} = useContext(AuthContext);
  const { data: likes = [], isLoading: loadingLike, error: errLike} = useGetLikes(post.id);
  const { data: comments = [], isLoading: loadingComment, error: errComment} = useGetComments(post.id);
  const { mutate: mutateLike } = useLike();
  const {mutate: mutatePost} = useDeletePost();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLike = () => {
    mutateLike([post.id, likes.includes(currentUser.id)])
  }

  const handleDelete = () => {
    mutatePost(post.id);
    setMenuOpen(false);
  }

  const handleReport = () => {
    // Todo report functionality
    setMenuOpen(false);
  }

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic ? "/upload/"+post.profilePic : "/upload/nopPic.webp"}></img>
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ color: "inherit" }}>
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <div className="relative" ref={menuRef}>
            <MoreHorizOutlinedIcon className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}/>
            {menuOpen && (
              <div className="dropdown-menu">
                {post.userId === currentUser.id ? (
                  <button onClick={handleDelete} className="dropdown-item delete">
                    Delete
                  </button>
                ) : (
                  <button onClick={handleReport} className="dropdown-item report">
                    Report
                  </button>
                )}
              </div>
            )}
          </div>
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
