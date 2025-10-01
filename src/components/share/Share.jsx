import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useCreatePost } from "../../hooks/usePosts";
import { upload } from "../../api/upload";

const Share = () => {
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");
  const { mutate, isLoading, error } = useCreatePost();

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload(file);
    mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
  };
  return (
    <div className="mb-5 p-2.5 md:py-5 md:px-10">
      <div className="p-5 bg-bg rounded shadow-xl">
        <div className="flex item-center justify-between">
          <div className="flex items-center flex-3">
            <img
              src={currentUser.profilePic ? "/upload/"+currentUser.profilePic : "/upload/nopPic.webp"}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <input
              className="w-full border-none p-2.5 focus:outline-none"
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="flex-1 flex justify-end">
            {file && (
              <img
                className="w-24 h-24 object-cover rounded-none"
                alt=""
                src={URL.createObjectURL(file)}
              />
            )}
          </div>
        </div>
        <hr className="text-gray-200 my-5" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label className="cursor-pointer" htmlFor="file">
              <div className="flex items-center gap-2.5">
                <img className="h-5" src="/img.png" alt="" />
                <span className="text-xs text-text-soft">Add image</span>
              </div>
            </label>
            <div className="flex items-center gap-2.5">
              <img className="h-5" src="map.png" alt="" />
              <span className="text-xs text-text-soft">Add Place</span>
            </div>
            <div className="flex items-center gap-2.5">
              <img className="h-5" src="friend.png" alt="" />
              <span className="text-xs text-text-soft">Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button
              className="bg-follow text-white p-1.5 rounded cursor-pointer"
              onClick={handleClick}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
