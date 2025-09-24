import React from "react";
import "./rightbar.css";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src="/pexels-fauxels-3184435.jpg" alt="user" />
              <span>Kill Bill</span>
            </div>
            <div className="buttons">
              <button className="follow">follow</button>
              <button className="dismiss">dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/pexels-fauxels-3184435.jpg" alt="user" />
              <span>Kill Bill</span>
            </div>
            <div className="buttons">
              <button className="follow">follow</button>
              <button className="dismiss">dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="/pexels-fauxels-3184435.jpg" alt="user" />
              <p>
                <span>Kill Bill</span>
                changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/pexels-fauxels-3184435.jpg" alt="user" />
              <p>
                <span>Kill Bill</span>
                changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/pexels-fauxels-3184435.jpg" alt="user" />
              <p>
                <span>Kill Bill</span>
                changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="/pexels-fauxels-3184435.jpg" alt="user" />
              <p>
                <span>Kill Bill</span> changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="/pexels-fauxels-3184435.jpg" alt="user" />
              <div className="online"></div>
              <span>Kill Bill</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
