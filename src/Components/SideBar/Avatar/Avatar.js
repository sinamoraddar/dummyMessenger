import React from "react";
import { userInfo } from "../../../Utils/userInfo";
import styles from "./Avatar.module.scss";

const Avatar = () => (
  <figure className={styles.avatar}>
    <img
      src={userInfo.profilePicture}
      alt={`${userInfo.name} ${userInfo.lastName}`}
    />
    <figcaption>{userInfo.name}</figcaption>
  </figure>
);

export default Avatar;
