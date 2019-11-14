import React, { useState } from "react";
import ChatItem from "./ChatItem/ChatItem";
import styles from "./ChatList.module.scss";

const createChatList = (tempContactsList, setCurrentChat, currentChat) => {
  console.log(tempContactsList);
  return tempContactsList.map(contact => (
    <ChatItem
      chatData={contact}
      setCurrentChat={setCurrentChat}
      currentChat={currentChat}
    />
  ));
};

const filterContactList = (contactsList, filterBy) => {
  const tempContactList = [];
  for (const contact in contactsList) {
    if (contactsList[contact].name.includes(filterBy)) {
      tempContactList.push(contactsList[contact]);
    }
  }
  return tempContactList;
};

const ChatList = ({ contactsList, currentChat, setCurrentChat }) => {
  const [filterBy, setFilterBy] = useState("");
  return (
    <div className={styles.chatList}>
      <div className={styles.searchInput}>
        <input
          type="text"
          placeholder="Search ..."
          value={filterBy}
          onChange={e => setFilterBy(e.target.value)}
        />
        <img src="./assets/icons/magnifying-glass.svg" alt="search here" />
      </div>

      {createChatList(
        filterContactList(contactsList, filterBy),
        setCurrentChat,
        currentChat
      )}
    </div>
  );
};

export default ChatList;
