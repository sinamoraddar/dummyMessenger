import React from "react";
import moment from "moment";
import styles from "./MessageItem.module.scss";
const MessageItem = ({
  author,
  chat,
  deleteMessage,
  currentChat,
  setCurrentChat
}) => {
  return (
    <div
      className={`${styles.container}
    ${author.name === "Alex" ? styles["right"] : styles["left"]}
    `}
    >
      {author.name === "Alex" ? (
        <React.Fragment>
          <img
            className={styles.profilePicture}
            src={author.profilePicture}
            alt={`${author.name} ${author.lastName}`}
          />
          <div className={`${styles.message} ${styles["message--user"]}`}>
            {chat.content}

            <button
              className={`${styles.deleteButton} ${styles["deleteButton--right"]}`}
              onClick={e =>
                deleteMessage(
                  currentChat.chatId,
                  chat.messageId,
                  setCurrentChat,
                  currentChat,
                  e
                )
              }
            >
              <i class="icon ion-md-trash"></i>
            </button>
            <span className={styles["time--user"]}>
              {moment(chat.submissionTime).format("HH : mm")}
            </span>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <img
            className={styles.profilePicture}
            src={currentChat.contact.profilePic}
            alt={currentChat.contact.name}
          />
          <div className={`${styles.message} ${styles["message--friend"]}`}>
            {chat.content}

            <button
              className={styles.deleteButton}
              onClick={e =>
                deleteMessage(
                  currentChat.chatId,
                  chat.messageId,
                  setCurrentChat,
                  currentChat,
                  e
                )
              }
            >
              <i class="icon ion-md-trash"></i>
            </button>
            <span className={styles["time--friend"]}>
              {moment(chat.submissionTime).format("HH : mm")}
            </span>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
export default MessageItem;
