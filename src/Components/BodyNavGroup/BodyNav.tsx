import {useState, useContext} from 'react';
import styles from "./BodyNav.module.css";
import BodyHome from './BodyHome';
import BodyMethod from './BodyMethod';

interface bodyProps {
  index: number;
}
const BodyNav = ({index}: bodyProps) => {
    
    
  return (
    <>
        <div className={styles.Body}>
          {index === 0 ? <BodyHome/> : <BodyMethod/>}
        </div>
    </>
  )
}

export default BodyNav