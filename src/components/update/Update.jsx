import React from "react";
import { upload } from "../../api/upload";
import { useProfileUpdate } from "../../hooks/useProfile";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const update = ({ setOpenUpdate, user }) => {
  const [cover, setCover] = React.useState(null);
  const [profile, setProfile] = React.useState(null);
  const [text, setText] = React.useState({
    name: user.name ? user.name : "",
    city: user.city ? user.city : "",
    language: user.language ? user.language : "",
  });

  const { mutate } = useProfileUpdate();

  const handleChange = (e) => {
    setText((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(cover, profile);
  console.log(user, user.coverPic, user.profilePic);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let coverUrl = user.coverPic;
    let profileUrl = user.profilePic;
    coverUrl = cover ? await upload(cover) : user.coverPic;
    profileUrl = profile ? await upload(profile) : user.profilePic;
    console.log(coverUrl, profileUrl);
    mutate({ ...text, coverPic: coverUrl, profilePic: profileUrl });
    setOpenUpdate(false);
  };

  return (
    <div className="fixed flex items-center justify-center top-0 right-0 w-screen h-screen bg-black/50 z-50 shadow-2xl rounded-xl border border-gray-300">
      <div className="m-auto w-full h-full md:w-4/6 lg:w-2/5 lg:h-9/12 bg-bg p-10 rounded-xl flex flex-col justify-between relative gap-5">
        <h1 className="text-xl text-gray-500">Update your profile</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-10">
            <label htmlFor="cover" className="flex gap-2.5 text-text-soft text-sm text-gray-500">
              <span>Cover Picture</span>
              <div className="relative">
                <img
                  className="w-24 h-24 object-cover border border-gray-300 rounded"
                  src={
                    cover
                      ? URL.createObjectURL(cover)
                      : "/upload/" + user.coverPic
                  }
                  alt=""
                />
                <CloudUploadIcon className="absolute bottom-1 right-1 text-gray-500 bg-white rounded-full p-0.5"/>
              </div>
            </label>
            <input
              type="file"
              id="cover"
              style={{ display: "none" }}
              onChange={(e) => setCover(e.target.files[0])}
            />
            <label htmlFor="profile" className="flex gap-2.5 text-text-soft text-sm text-gray-500 cursor-pointer">
              <span>Profile Picture</span>
              <div className="relative">
                <img
                  className="w-24 h-24 object-cover border border-gray-300 rounded"
                  src={
                    cover
                      ? URL.createObjectURL(profile)
                      : "/upload/" + user.profilePic
                  }
                  alt=""
                />
                <CloudUploadIcon className="absolute bottom-1 right-1 text-gray-500 bg-white rounded-full p-0.5"/>
              </div>
            </label>
            <input
              type="file"
              style={{ display: "none" }}
              onChange={(e) => setProfile(e.target.files[0])}
            />
          </div>
          <label className="flex gap-2.5 text-text-soft text-sm text-gray-500">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={text.name}
            className="p-1.5 border bg-transparent border-x-0 border-t-0 border-b-2 border-border text-text-soft"
            onChange={handleChange}
          />
          <label className="flex gap-2.5 text-text-soft text-sm text-gray-500">City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={text.city}
            className="p-1.5 border bg-transparent border-x-0 border-t-0 border-b-2 border-border text-text-soft"
            onChange={handleChange}
          />
          <label className="flex gap-2.5 text-text-soft text-sm text-gray-500">Language</label>
          <input
            type="text"
            name="language"
            placeholder="Language"
            value={text.language}
            className="p-1.5 border bg-transparent border-x-0 border-t-0 border-b-2 border-border text-text-soft"
            onChange={handleChange}
          />
          <button
            className="bg-follow text-white p-2.5 rounded font-bold cursor-pointer"
            onClick={handleSubmit}
          >
            Update
          </button>
        </form>
        <button
          className="text-xl font-bold cursor-pointer bg-[#f0544f] absolute p-1.5 text-white top-2.5 right-5 border-none rounded"
          onClick={() => setOpenUpdate(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default update;
