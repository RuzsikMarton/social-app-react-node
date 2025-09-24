import React from "react";
import "./leftbar.css";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="/pexels-fauxels-3184435.jpg" alt="user"></img>
            <span>Kill Bill</span>
          </div>
          <div className="item">
            <img src={Friends} alt="item"></img>
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="item"></img>
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="item"></img>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="item"></img>
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="item"></img>
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="item"></img>
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="item"></img>
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="item"></img>
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="item"></img>
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="item"></img>
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Other</span>
          <div className="item">
            <img src={Tutorials} alt="item"></img>
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="item"></img>
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Fund} alt="item"></img>
            <span>Fundraise</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
