import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./QuoraBox.css";

export default function QuorBox() {
  const user = useSelector(selectUser);

  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar
          src={
            user.photo
              ? user.photo
              : "https://img.icons8.com/cotton/2x/user-male.png"
          }
          className="quoraBox__infoAvatar"
        />
        <h5>{user.displayName ? user.displayName : user.email}</h5>
      </div>
      <div className="quoraBox__quora">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}
