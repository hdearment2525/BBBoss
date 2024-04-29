import {useState} from 'react';
import React from 'react';
import styles from "./Title.module.css";
import NavBar from "../NavBarGroup/NavBar";
import Social from '../SocialGroup/Social';
interface titleProps {
  children: string;
  index: number;
  setIndex: (index: number) => void;
}

const Title = ({children, index, setIndex}: titleProps) => {
  return (
    <>
      <div className={styles.Title}>
        <div className={styles.BBB}>{children}</div>
        <div className={styles.NavBarThing}>
          <div className={styles.Nav}>
            <NavBar index={index} setIndex={setIndex}/>
            
          </div>
          
        </div>
        <div className={styles.Search}>
          <Social/>
        </div>
      </div>
    </>
  )
}

export default Title