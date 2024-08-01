import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../assets/css/join.css";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="join-outer-container">
      <div className="join-inner-container">
        <div>
          <input
            placeholder="이름"
            className="join-input"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="채팅방 번호"
            className="join-input"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          className="button"
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type="submit">가입</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
