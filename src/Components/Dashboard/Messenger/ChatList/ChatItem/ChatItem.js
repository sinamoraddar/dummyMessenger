import React, { useState, useEffect } from "react";
import { database } from "../../../../../firebase/firebase";
import styles from "./ChatItem.module.scss";

const getChatData = (userId, setCurrentChat, contact) => {
  database
    .collection("chats")
    .doc(userId)
    .collection("messages")
    .get()
    .then(querysnapshot => {
      let tempChatData = [];
      querysnapshot.forEach(doc => {
        /* just because we don't need the last message here,we simply ignore it */
        if (doc.id !== "lastMessage") tempChatData.push(doc.data());
      });
      tempChatData.sort((a, b) => a.submissionTime - b.submissionTime);
      setCurrentChat({ chatId: userId, contact, messages: tempChatData });
    })
    .catch(error => console.log(error));
};

const ChatItem = ({
  contact,
  currentChat,
  setCurrentChat,
  setCurrentMessengerView
}) => {
  const [lastMessage, setLastMessage] = useState(null);
  useEffect(() => {
    database
      .collection("chats")
      .doc(contact.userId)
      .collection("messages")
      .doc("lastMessage")
      .get()
      .then(querysnapshot => {
        let tempLastMessage = "";
        if (Object.keys(querysnapshot.data()).length > 0) {
          // console.log(querysnapshot.data());
          // debugger;
          console.log("lastmessage", querysnapshot.data());
          tempLastMessage = querysnapshot.data().content;
          if (tempLastMessage.length > 20) {
            tempLastMessage = tempLastMessage.substring(0, 20) + "...";
          }
        }
        setLastMessage(tempLastMessage);
      }, []);
  });
  return (
    <div
      className={`${styles.chatItem} ${currentChat &&
        contact.userId === currentChat.userId &&
        styles.isActive}`}
      onClick={() => {
        // alert("hi");
        getChatData(contact.userId, setCurrentChat, contact);
        setCurrentMessengerView("chatScreen");
        // getChatData(contact.userId);
        // console.log("messeges", contact.messages);
      }}
    >
      <img src={contact.profilePic} alt={contact.name} />
      <div className={styles.text}>
        <h4>{contact.name}</h4>
        {/* show the last message */}
        <p>
          {lastMessage}
          {/* {getLastMessage(contact.userId)} */}
        </p>
      </div>
    </div>
  );
};

export default ChatItem;
