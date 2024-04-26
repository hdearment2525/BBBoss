import {useState} from 'react';
import styles from "./Title.module.css";
import NavBar from "../NavBarGroup/NavBar";
import Social from '../SocialGroup/Social';
interface titleProps {
  children: string;
}

const Title = ({children}: titleProps) => {
  return (
    <>
      <div className={styles.Title}>
        <div className={styles.BBB}>{children}</div>
        <div className={styles.NavBarThing}>
          <div className={styles.Nav}>
            <NavBar/>
            
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