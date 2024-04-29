import React, {useState} from 'react';
import styles from "./NavBar.module.css"

interface NavItemProp {
    title: string;
    index: number;
    setIndex: (index: number) => void;

}


const NavItem = ({title, index, setIndex}: NavItemProp) =>  {
    return (
        <div className={styles.NavItem} onClick={() => setIndex(index)}>{title}</div>
    );
}

interface NavBarProp {
  index: number;
  setIndex: (index: number) => void;
}
const NavBar = ({index, setIndex}: NavBarProp) => {
  
  return (
    
      <div className={styles.NavBar}>
        <NavItem index={0}title="Home" setIndex={setIndex} />
        <NavItem index={1}title="Method" setIndex={setIndex}/>
        <NavItem index={2}title="Schedule" setIndex={setIndex}/>
        <NavItem index={3}title="About" setIndex={setIndex}/>
    </div>
    
  )
}

export default NavBar