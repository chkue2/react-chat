import React from "react";

import "./message.css";

import ReactEmoji from "react-emoji";

function Message({ message: { user, text }, name }) {
  const trimmedName = name.trim().toLowerCase();

  const isSentByCurrentUser = user === trimmedName;

  return isSentByCurrentUser ? (
    <div className="message-container justify-end">
      <p className="sent-text pr-10">{trimmedName}</p>
      <div className="message-box background-blue">
        <p className="message-text color-white">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="message-container justify-start">
      <div className="message-box background-light">
        <p className="message-text color-dark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sent-text pl-10">{user}</p>
    </div>
  );
}

export default Message;
