import React, { useState } from "react";
import ChatItem from "./ChatItem/ChatItem";
import styles from "./ChatList.module.scss";

const createChatList = (
  tempContactsList,
  setCurrentChat,
  currentChat,
  setCurrentMessengerView
) => {
  // console.log(tempContactsList);
  return tempContactsList.map(contact => (
    <ChatItem
      contact={contact}
      setCurrentChat={setCurrentChat}
      currentChat={currentChat}
      setCurrentMessengerView={setCurrentMessengerView}
    />
  ));
};

const filterContactList = (contactsList, filterBy) => {
  // debugger;
  return contactsList.filter(contact => {
    return contact.name.includes(filterBy);
  });
};

const ChatList = ({
  contactsList,
  currentChat,
  setCurrentChat,
  currentMessengerView,
  setCurrentMessengerView
}) => {
  const [filterBy, setFilterBy] = useState("");
  console.log("contactslist", contactsList);
  return (
    <div
      className={`${styles.chatList} ${
        currentMessengerView === "chatList"
          ? styles.isCurrentMessengerView
          : styles.isNotCurrentMessengerView
      }`}
    >
      <div className={styles.searchInput}>
        <input
          type="text"
          placeholder="Search ..."
          value={filterBy}
          onChange={e => setFilterBy(e.target.value)}
        />
        <img src="./assets/icons/magnifying-glass.svg" alt="search here" />
      </div>
      <div className={styles.chatItemContainer}>
        {contactsList ? (
          createChatList(
            filterContactList(contactsList, filterBy),
            setCurrentChat,
            currentChat,
            setCurrentMessengerView
          )
        ) : (
          <React.Fragment>
            <img
              className={styles.loading}
              src="./assets/gifs/loading.svg"
              alt="loading"
            />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default ChatList;
