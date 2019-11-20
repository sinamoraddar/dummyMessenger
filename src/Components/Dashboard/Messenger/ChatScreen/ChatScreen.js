import React, { useState } from "react";
import moment from "moment";
import AppContext from "../../../App/AppContext";
import styles from "./ChatScreen.module.scss";

const ChatScreen = ({ currentChat, setCurrentChat, setContactsList }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  return (
    <AppContext.Consumer>
      {data => {
        return (
          <div className={styles.chatScreen}>
            {/* render chat screen only when the currentChat is not null */}
            {currentChat ? (
              <React.Fragment>
                <button onClick={() => setCurrentChat(null)}>
                  exit current chat
                </button>
                {currentChat.messages.map(chat =>
                  chat.author === 0 ? (
                    <div
                      className={`${styles.message} ${styles["message--user"]}`}
                    >
                      {chat.content}
                      time : {chat.submissionTime}
                    </div>
                  ) : (
                    <div
                      className={`${styles.message} ${styles["message--friend"]}`}
                    >
                      {chat.content}
                      time : {chat.submissionTime}
                    </div>
                  )
                )}
                <div className={styles.typingArea}>
                  <textarea
                    placeholder="type something"
                    onChange={e => setCurrentMessage(e.target.value)}
                    value={currentMessage}
                  />
                  {/* show the send button if only the currentMessage isn't empty */
                  currentMessage && (
                    <button
                      onClick={() => {
                        setCurrentChat({
                          ...currentChat,
                          messages: [
                            ...currentChat.messages,
                            {
                              content: currentMessage,
                              // debugger(;
                              submissionTime: new Date().now,
                              author: 0
                            }
                          ]
                        });
                        setCurrentMessage("");
                        // data.setTestMessage(currentMessage);
                      }}
                    >
                      send
                    </button>
                  )}
                </div>
              </React.Fragment>
            ) : (
              "welcome , please select a chat to start"
            )}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default ChatScreen;
