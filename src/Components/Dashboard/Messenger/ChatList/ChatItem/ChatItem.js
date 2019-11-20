import React from "react";
import styles from "./ChatItem.module.scss";
const getLastMessage = totalMessages => {
  let lastMessage = totalMessages.slice(-1)[0].content;
  if (lastMessage.length > 20) {
    lastMessage = lastMessage.substring(0, 20) + "...";
  }
  return lastMessage;
};

const ChatItem = ({ chatData, currentChat, setCurrentChat }) => {
  return (
    <div
      className={`${styles.chatItem} ${currentChat &&
        chatData.userId === currentChat.userId &&
        styles.isActive}`}
      onClick={() => {
        setCurrentChat(chatData);

        // console.log("messeges", chatData.messages);
      }}
    >
      <img src={chatData.profilePic} alt={chatData.name} />
      <div className={styles.text}>
        <h4>{chatData.name}</h4>
        {/* show the last message */}
        <p>{getLastMessage(chatData.messages)}</p>
      </div>
    </div>
  );
};

export default ChatItem;
