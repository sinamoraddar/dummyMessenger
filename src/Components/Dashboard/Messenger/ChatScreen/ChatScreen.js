import React, { useState, useEffect } from "react";
import uuidv1 from "uuid/v1";
import moment from "moment";
import { database } from "../../../../firebase/firebase";
import AppContext from "../../../App/AppContext";
import { userInfo } from "../../../../Utils/userInfo";
import styles from "./ChatScreen.module.scss";

//update the last message document on the messages collection
const updateLastmessage = currentChat => {
  let lastMessage = {};
  /* get the last message only if the list isn't empty,otherwise set an empty object */
  if (currentChat.messages.length > 0) {
    lastMessage = currentChat.messages.slice(-1)[0];
  }
  database
    .collection("chats")
    .doc(currentChat.chatId)
    .collection("messages")
    .doc("lastMessage")
    .set(lastMessage)
    .then(() => {
      console.log("the last message was updated successfully");
    })
    .catch(error => console.log(error));
};
/* delete the message */
const deleteMessage = (
  chatId,
  messageId,
  setCurrentChat,
  currentChat,
  event
) => {
  database
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .doc(messageId)
    .delete()
    .then(() => {
      let tempMessagesList = currentChat.messages.filter(
        message => message.messageId !== messageId
      );
      setCurrentChat({ ...currentChat, messages: tempMessagesList });
    })
    .catch(error => console.log(error));
};
/* update the current chat  */
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
    .then(() => {
      // setCurrentMessage("");
      setCurrentChat({
        ...currentChat,
        messages: [...currentChat.messages, tempMessage]
      });
    })
    .catch(error => console.log(error));
};
/* submit message functionality */
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
};

const ChatScreen = ({
  currentChat,
  setCurrentChat,
  contactsList,
  setContactsList
}) => {
  const [currentMessage, setCurrentMessage] = useState("");
  /* clear the typing area whenever the chat data changes */
  useEffect(() => {
    setCurrentMessage("");
    /* update the last message if the current chat data is not undefined */
    if (currentChat) {
      updateLastmessage(currentChat);
    }
  }, [currentChat]);
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
                        <img
                          className={styles.profilePicture}
                          src={userInfo.profilePicture}
                          alt={`${userInfo.name} ${userInfo.lastName}`}
                        />
                        {chat.content}
                        time : {moment(chat.submissionTime).format("HH : mm")}
                        <button
                          onClick={e =>
                            deleteMessage(
                              currentChat.chatId,
                              chat.messageId,
                              setCurrentChat,
                              currentChat,
                              e
                            )
                          }
                        >
                          delete
                        </button>
                      </div>
                    ) : (
                      <div
                        className={`${styles.message} ${styles["message--friend"]}`}
                      >
                        <img
                          className={styles.profilePicture}
                          src={currentChat.contact.profilePic}
                          alt={currentChat.contact.name}
                        />
                        {chat.content}
                        time : {moment(chat.submissionTime).format("HH : mm")}
                        <button
                          onClick={e =>
                            deleteMessage(
                              currentChat.chatId,
                              chat.messageId,
                              setCurrentChat,
                              currentChat,
                              e
                            )
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
