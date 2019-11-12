import React, { useState, useEffect } from "react";
import styles from "./Messenger.module.scss";
import ChatList from "./ChatList/ChatList";
import ChatScreen from "./ChatScreen/ChatScreen";
import { contacts } from "../../../Utils/contacts";

const Messenger = props => {
  const [currentChat, setCurrentChat] = useState(null);
  const [chatList, setChatList] = useState(null);
  //fetch the users data
  useEffect(() => {
    // contacts.map(contact => alert("hi"));
    setChatList(contacts);
  }, []);
  return (
    <div className={styles.messenger}>
      <ChatList chatList={chatList} setCurrentChat={setCurrentChat} />
      <ChatScreen currentChat={currentChat}/>
    </div>
  );
};

export default Messenger;
