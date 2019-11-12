import React from "react";

const ChatScreen = ({ chatList }) => (
  <div>
    {chatList
      ? chatList.map(chat => chat.text)
      : "welcome , please select a chat to start"}
  </div>
);

export default ChatScreen;
