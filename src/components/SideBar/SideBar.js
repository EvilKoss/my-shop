import React from "react";
import styles from './SideBar.module.css';

export default function SideBar(props) {
  const {categories,onCategorySelected} = props;

  return(
    <div className={styles.navLinks}>
      {categories.map(el => {
        return <button key={el} onClick={() => onCategorySelected(el)}>{el}</button>
      })}
    </div>
  );
}


/*
CPU
RAM
HDD
power unit
cooling system
frame */