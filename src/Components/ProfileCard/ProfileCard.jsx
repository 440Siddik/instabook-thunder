import React, { useContext } from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import { AuthContext } from "../../AuthContext/AuthProvider";

const ProfileCard = () => {
  const {user} = useContext(AuthContext)
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={user?.photoURL} alt="" />
      </div>

      {/* ProfileName  */}
      <div className="ProfileName">
        <span>{user?.displayName}</span>
        <span>Senior Designer</span>
      </div>

      {/* followers */}
      <div className="FollowStatus">
        <hr />

        <div className="followcontainer">
          <div className="Follow">
            <span>10,867</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="Follow">
            <span>1</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="Follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />

        {ProfilePage ? "" : <span className="myprofile">My Profile</span>}
      </div>
    </div>
  );
};

export default ProfileCard;
