import React from 'react';
import styles from "./BodyHome.module.css";

const BodyHome = () => {
  return (
    <>
      <div className={styles.BodyHome}>
        <div className={styles.Paragraph}>
          <div className={styles.topPara}>Building You a Better Future</div>
          <div className={styles.titlePara}>Bodies By Boss</div>
          <div className={styles.buttonPara} onClick={() => console.log("test")}>Get Started</div>
        </div>
      </div>
    </>
    
  )
}

export default BodyHome