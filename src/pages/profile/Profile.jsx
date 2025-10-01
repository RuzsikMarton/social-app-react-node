import React, { useContext } from "react";
import "./profile.css";
import Posts from "../../components/posts/Posts.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useLocation } from "react-router-dom";
import { useProfileInfo } from "../../hooks/useProfile.js";

const Profile = () => {
  const {currentUser} = useContext(AuthContext)
  const userId = parseInt(useLocation().pathname.split("/")[2]);
  const { data: user = [], isLoading, error } = useProfileInfo(userId);

  return (
    <div className="profile">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <div className="images">
            <img
              src={"/upload/" + user[0].coverPic}
              alt=""
              className="cover border-none"
            />
            <img
              src={
                user.profilePic
                  ? "/upload/" + user[0].profilePic
                  : "/upload/nopPic.webp"
              }
              alt=""
              className="profilePic"
            />
          </div>
          <div className="profileContainer">
            <div className="userInfo">
              <div className="left">
                <a href="https://www.facebook.com/">
                  <FacebookRoundedIcon fontSize="large" />
                </a>
                <a href="https://www.instagram.com/">
                  <InstagramIcon fontSize="large" />
                </a>
                <a href="https://www.x.com/">
                  <XIcon fontSize="large" />
                </a>
                <a href="https://www.linkedin.com/">
                  <LinkedInIcon fontSize="large" />
                </a>
                <a href="https://www.pinterest.com/">
                  <PinterestIcon fontSize="large" />
                </a>
              </div>
              <div className="center">
                <span>{user[0].name}</span>
                <div className="info">
                  <div className="item">
                    <PlaceIcon />
                    <span>{user[0].city}</span>
                  </div>
                  <div className="item">
                    <LanguageIcon />
                    <span>{user[0].language}</span>
                  </div>
                </div>
                {userId === currentUser.id ? (<button>Update</button>) : (<button>Follow</button>)}
              </div>
              <div className="right">
                <EmailOutlinedIcon />
                <MoreVertIcon />
              </div>
            </div>
          </div>
          <Posts />
        </>
      )}
    </div>
  );
};

export default Profile;
