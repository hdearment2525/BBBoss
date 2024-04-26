import {useState} from 'react';
import styles from "./NavBar.module.css"

interface NavItemProp {
    title: string;
    index: number;
    navTo: () => void;
}
const NavItem = ({title, index, navTo}: NavItemProp) =>  {
  
    return (
        <div className={styles.NavItem} onClick={navTo}>{title}</div>
    );
}
const NavBar = () => {
  return (
    <div className={styles.NavBar}>
        <NavItem index={0}title="Home" navTo={()=> console.log("Home Clicked")}/>
        <NavItem index={1}title="Method" navTo={()=> console.log("Mission Clicked")}/>
        <NavItem index={2}title="Schedule" navTo={()=> console.log("Schedule Clicked")}/>
        <NavItem index={3}title="About" navTo={()=> console.log("About Me")}/>
    </div>
  )
}

export default NavBar