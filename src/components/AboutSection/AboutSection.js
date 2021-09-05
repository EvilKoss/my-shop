import React from "react";
import styles from "./AboutSection.module.css";

export default function AboutSection(props) {
  const { children, title, icon } = props;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img alt="icon" width="20" height="20" src={icon} />
        <span>{title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}
