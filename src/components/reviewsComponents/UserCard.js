import React from "react";
import "./../../styles/components/usercard.css";

const UserCard = ({ userPhoto, userName, userStatus }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={userPhoto} alt="userphoto" className="user-image" />
      </div>
      <div className="text-container">
        <p> {userName} </p>
        <p className="status"> {userStatus} </p>
      </div>
    </div>
  );
};

export default UserCard;
