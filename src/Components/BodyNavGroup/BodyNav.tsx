import {useState, useContext} from 'react';
import styles from "./BodyNav.module.css";
import BodyHome from './BodyHome';
import BodyMethod from './BodyMethod';
import BodySchedule from './BodySchedule';
import BodyAbout from './BodyAbout';


interface bodyProps {
  index: number;
}
const BodyNav = ({index}: bodyProps) => {
    
    
  return (
    <>
        <div className={styles.Body}>
          {index === 0 ? <BodyHome/> :
           index === 1 ? <BodyMethod/> :
           index === 2 ? <BodySchedule/> :
           index === 3 ? <BodyAbout/> :
           <BodyHome/>}
        </div>
    </>
  )
}

export default BodyNav