import React, { useState } from "react";
import uuidv1 from "uuid/v1";
import moment from "moment";
import { database } from "../../../../firebase/firebase";
import AppContext from "../../../App/AppContext";
import styles from "./ChatScreen.module.scss";

const delteMessage = (chatId, messageId) => {
  database
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .doc(messageId)
    .delete()
    .then(() => console.log("the message was deleted successfully"))
    .catch(error => console.log(error));
};

const updateCurrentChat = (
  tempMessage,
  currentChat,
  setCurrentChat,
  setCurrentMessage
) => {
  database
    .collection("chats")
    .doc(currentChat.chatId)
    .collection("messages")
    .doc("lastMessage")
    .set(tempMessage)
    .then(() => {})
    .catch(error => console.log(error));
};

const submitMessage = (
  currentMessage,
  setCurrentMessage,
  currentChat,
  setCurrentChat
) => {
  const tempUuid = uuidv1();
  const tempMessage = {
    author: 0,
    content: currentMessage,
    messageId: tempUuid,
    submissionTime: moment().valueOf()
  };
  /* add the submitted message to the firestore */
  // debugger;
  database
    .collection("chats")
    .doc(currentChat.chatId)
    .collection("messages")
    .doc(tempUuid)
    .set(tempMessage)
    .then(() => {
      // alert("hi");

      updateCurrentChat(
        tempMessage,
        currentChat,
        setCurrentChat,
        setCurrentMessage
      );
    })
    .catch(error => console.log(error));
  setCurrentChat({
    ...currentChat,
    messages: [...currentChat.messages, tempMessage]
  });
  setCurrentMessage("");
};

const ChatScreen = ({ currentChat, setCurrentChat, setContactsList }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  // debugger;
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
                <div className={styles.messageContainer}>
                  {currentChat.messages.map(chat =>
                    chat.author === 0 ? (
                      <div
                        className={`${styles.message} ${styles["message--user"]}`}
                      >
                        {chat.content}
                        time : {moment(chat.submissionTime).format("HH : mm")}
                        <button
                          onClick={() =>
                            delteMessage(currentChat.chatId, chat.messageId)
                          }
                        >
                          delete
                        </button>
                      </div>
                    ) : (
                      <div
                        className={`${styles.message} ${styles["message--friend"]}`}
                      >
                        {chat.content}
                        time : {moment(chat.submissionTime).format("HH : mm")}
                        <button
                          onClick={() =>
                            delteMessage(currentChat.chatId, chat.messageId)
                          }
                        >
                          delete
                        </button>
                      </div>
                    )
                  )}
                </div>
                <div className={styles.typingArea}>
                  <textarea
                    placeholder="write a message ..."
                    onChange={e => setCurrentMessage(e.target.value)}
                    value={currentMessage}
                  />
                  {/* show the send button if only the currentMessage isn't empty */
                  currentMessage && (
                    <button
                      onClick={() => {
                        submitMessage(
                          currentMessage,
                          setCurrentMessage,
                          currentChat,
                          setCurrentChat
                        );

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
