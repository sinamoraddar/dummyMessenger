import React from "react";
import ChatItem from "./ChatItem/ChatItem";
const createChatList = (chatList,setCurrentChat) => {
  console.log(chatList);
  const tempChatList = [];
  for (const chatItem in chatList) {
    tempChatList.push(<ChatItem {...chatList[chatItem]} setCurrentChat={setCurrentChat} />);
  }
  return tempChatList;
};

const ChatList = ({ chatList ,setCurrentChat}) => {
  return <div>{createChatList(chatList,setCurrentChat)}</div>;
};

export default ChatList;
