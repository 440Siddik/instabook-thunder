import React, { useState, useRef, useContext } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const [storedimg, setStoredImg] = useState(null);
  const {user} = useContext(AuthContext)
  const imageRef = useRef();
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const status = form.status.value;
    const myImage = form.myImage.files[0];

    const formData = new FormData();
    formData.append("image", myImage);

    const url =
      "https://api.imgbb.com/1/upload?key=3833e2aac0a7b1e1fffdd361e88bedfc";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const imageUrl = data.data.display_url;
        setStoredImg(imageUrl);
      });

    const statuses = {
      status,
      img: storedimg,
      email:user?.email
    };
    fetch("https://instabook-thunder-server-440siddik.vercel.app/statuses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(statuses),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged == true){
          toast.success('Successfully Posted')
          form.reset()
          setImage(null)
        }
      });
  };

  return (
    <div className="PostShare">
      <Link to='/login'><button className="button">Login</button></Link>
      <img src={user?.photoURL} alt="" />
      <form onSubmit={handleSubmit}>
        <input type="text" name="status" placeholder="What's Happening?" />
        <div className="PostOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button type="submit" className="button ps-button">
            Share
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={handleImageChange}
            />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </form>
    </div>
  );
};

export default PostShare;
