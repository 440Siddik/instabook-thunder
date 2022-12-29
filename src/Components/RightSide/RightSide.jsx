import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
// import Noti from "../../img/noti.png";
import About from '../../img/about-me.png'
import Media from "../../img/media.png";
import Message from "../../img/message.png";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import { Link } from "react-router-dom";
const RightSide = () => {
  const [modalopened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navicons">
        <Link to="/home">
          <img src={Home} alt="" />
        </Link>
        <Link to='/media'>
          <img src={Media} alt="" />
        </Link>
        <Link to="/about">
          <img src={About} alt="" />
        </Link>
        <img src={Message} alt="" />
      </div>

      <TrendCard />

      <button className="button share-btn" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalopened={modalopened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
