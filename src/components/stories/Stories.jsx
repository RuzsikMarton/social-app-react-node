import { useContext } from "react";
import "./stories.css";
import { AuthContext } from '../../context/AuthContext.jsx'

//TEMPORARY

const Stories = () => {

  const {currentUser} = useContext(AuthContext)
  const stories = [
    {
      id: 1,
      name: "Kill Bill",
      img: "/pexels-fauxels-3184435.jpg",
    },
    {
      id: 2,
      name: "Kill Bill",
      img: "/pexels-fauxels-3184435.jpg",
    },
    {
      id: 3,
      name: "Kill Bill",
      img: "/pexels-fauxels-3184435.jpg",
    },
    {
      id: 4,
      name: "Kill Bill",
      img: "/pexels-fauxels-3184435.jpg",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
