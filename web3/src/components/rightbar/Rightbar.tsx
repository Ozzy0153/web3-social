import React from "react";
import "./Rightbar.css";
import Message from "../message/Message";
import FriendReq from "../friendReq/FriendReq";

function Rightbar() {
  return <div className="rightBar">
    <div className="rightbar-container">
      <Message/>
      <FriendReq/>
    </div>
  </div>;
}

export default Rightbar;
