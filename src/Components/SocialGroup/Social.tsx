import { useState } from "react";

import styles from "./Social.module.css";
import {FaInstagram} from "react-icons/fa";
import {FaTiktok} from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";



const Social = () => {
    const handleClick = (url: string) => {
        window.open(url);
    }
  return (
    <>
        <div className={styles.SocialContainer}>
            <FaInstagram size={24} color={"#0F0F0F"} onClick={() => handleClick("https://www.instagram.com/")}/>
            <FaTiktok size={24} color={"#0F0F0F"} onClick={() => handleClick("https://www.tiktok.com/")}/>
            <SiYoutubeshorts size={24} color={"#0F0F0F"} onClick={() => handleClick("https://www.youtube.com/shorts")}/>
        </div>
    </>
  )
}

export default Social