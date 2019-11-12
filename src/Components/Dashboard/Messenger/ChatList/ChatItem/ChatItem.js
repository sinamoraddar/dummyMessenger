import React from "react";
import styles from './ChatItem.module.scss';

const ChatItem = ({ name ,messages,setCurrentChat}) => <div className={styles.chatItem} onClick={()=>{setCurrentChat(messages)
console.log('messeges',messages)
}}>{name}</div>;

export default ChatItem;