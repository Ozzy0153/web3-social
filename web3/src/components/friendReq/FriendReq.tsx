import React from "react";
import "./FriendReq.css";

import { Link } from "react-router-dom";

import FriendReqData from "../../FackApis/FirendReqData";

function FriendReq() {
  return (
    <div className="Friend-Requests">
      <h4>Friend Requests</h4>
      {FriendReqData.map((friend) => (
        <div className="request">
          <Link to="/profile/id">
            <div className="info" key={friend.id}>
              <div className="user">
                <img src={friend.img} alt="" />
              </div>
              <div className="info-name">
                <h5>{friend.name}</h5>
                <p>{friend.info}</p>
              </div>
            </div>
          </Link>

          <div className="action">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendReq;
