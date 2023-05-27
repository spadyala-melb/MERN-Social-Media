import React from "react";
import "./message.css";

const Message = () => {
  const isMessageOwn = true;

  return (
    <>
      <div
        className={isMessageOwn ? "message-container own" : "message-container"}
      >
        <div className="message-content">
          <div className="message-owner-pic">
            <img src="/assets/person/1.jpeg" alt="" />
            <span className="message-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              quae ab amet dicta quaerat adipisci veniam cum optio numquam
              temporibus!
            </span>
          </div>
          <div className="message-timestamp">10 mins ago..</div>
        </div>
      </div>
    </>
  );
};

export default Message;
