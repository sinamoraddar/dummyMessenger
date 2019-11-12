import React, { useState } from "react";
import styles from "./ChatScreen.module.scss";

const ChatScreen = ({ currentChat, setCurrentChat, setContactsList }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  return (
    <div>
      {/* render chat screen only when the currentChat is not null */}
      {currentChat ? (
        <React.Fragment>
          <button onClick={() => setCurrentChat(null)}>
            exit current chat
          </button>
          {currentChat.map(chat => (
            <div>{chat.content}</div>
          ))}
          <div className={styles.typingArea}>
            <textarea
              placeholder="type something"
              onChange={e => setCurrentMessage(e.target.value)}
              value={currentMessage}
            />
            <button
              onClick={() => {
                setCurrentChat([
                  ...currentChat,
                  { content: currentMessage, time: new Date().now, author: 0 }
                ]);
              }}
            >
              send
            </button>
          </div>
        </React.Fragment>
      ) : (
        "welcome , please select a chat to start"
      )}
    </div>
  );
};

export default ChatScreen;
