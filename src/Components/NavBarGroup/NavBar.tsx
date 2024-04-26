import {useState} from 'react';
import styles from "./NavBar.module.css"

interface NavItemProp {
    title: string;
    navTo: () => void;
}
const NavItem = ({title, navTo}: NavItemProp) =>  {
    return (
        <div className={styles.NavItem} onClick={navTo}>{title}</div>
    );
}
const NavBar = () => {
  return (
    <div className={styles.NavBar}>
        <NavItem title="Home" navTo={()=> console.log("Home Clicked")}/>
        <NavItem title="Method" navTo={()=> console.log("Mission Clicked")}/>
        <NavItem title="Schedule" navTo={()=> console.log("Schedule Clicked")}/>
        <NavItem title="About" navTo={()=> console.log("About Me")}/>
    </div>
  )
}

export default NavBar