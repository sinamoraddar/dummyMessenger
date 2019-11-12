import React from "react";
import ChatItem from "./ChatItem/ChatItem";
const createChatList = (contactsList,setCurrentChat) => {
  console.log(contactsList);
  const tempChatList = [];
  for (const chatItem in contactsList) {
    tempChatList.push(<ChatItem {...contactsList[chatItem]} setCurrentChat={setCurrentChat} />);
  }
  return tempChatList;
};

const ChatList = ({ contactsList ,setCurrentChat}) => {
  return <div>{createChatList(contactsList,setCurrentChat)}</div>;
};

export default ChatList;
