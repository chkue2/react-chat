import React, { useEffect } from "react";

import BasicScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";

import "./messages.css";

function Messages({ messages, name }) {
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <BasicScrollToBottom className="messages">
      {messages.map((message, i) => {
        return <Message key={i} message={message} name={name} />;
      })}
    </BasicScrollToBottom>
  );
}

export default Messages;
