import React, { useState, useEffect } from "react";
import styles from "./Messenger.module.scss";
import ChatList from "./ChatList/ChatList";
import ChatScreen from "./ChatScreen/ChatScreen";
import { contacts } from "../../../Utils/contacts";

const Messenger = props => {
  const [currentChat, setCurrentChat] = useState(null);
  const [contactsList, setContactsList] = useState(null);
  /* update the contactslist whenever the currentChat changes */
  useEffect(() => {
    if (currentChat) {
      setContactsList({
        ...contactsList,
        [currentChat.userId]: { ...currentChat }
      });
    }
  }, [currentChat]);

  //fetch the users data
  useEffect(() => {
    // contacts.map(contact => alert("hi"));
    setContactsList(contacts);
  }, []);
  return (
    <div className={styles.messenger}>
      <ChatList
        contactsList={contactsList}
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
      />
      <ChatScreen
        currentChat={currentChat}
        contactsList={contactsList}
        setCurrentChat={setCurrentChat}
        setContactsList={setContactsList}
      />
    </div>
  );
};

export default Messenger;
