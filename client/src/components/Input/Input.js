import React from "react";

import "./input.css";

function Input({ setMessage, sendMessage, message }) {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="전송하려는 메시지를 입력하세요."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="send-button" onClick={(e) => sendMessage(e)}>
        전송
      </button>
    </form>
  );
}

export default Input;
