import React, { useContext, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { Link } from "react-router-dom";
const InfoCard = () => {
  const [modalopened, setModalOpened] = useState(false);
  const { logout } = useContext(AuthContext);
  const {user} = useContext(AuthContext)
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h2>Your Info / About</h2>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalopened={modalopened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Name : </b>
        </span>
        <span>{user.displayName}</span>
      </div>
      <div className="info">
        <span>
          <b>Email : </b>
        </span>
        <span>{user?.email}</span>
      </div>
      <div className="info">
        <span>
          <b>School/University : </b>
        </span>
        <span>Boston University</span>
      </div>
      <div className="info">
        <span>
          <b>Lives In : </b>
        </span>
        <span>New York</span>
      </div>
      <div className="info">
        <span>
          <b>Status : </b>
        </span>
        <span>Single</span>
      </div>
      <div className="info">
        <span>
          <b>Works at : </b>
        </span>
        <span>Student</span>
      </div>
      {user ? (
        <button onClick={handleLogOut} className="button logout">
          Log Out
        </button>
      ) : (
        <Link to="/login">
          {" "}
          <button className="button logout">Log In</button>
        </Link>
      )}
    </div>
  );
};

export default InfoCard;
