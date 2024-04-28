import React,{useState} from 'react';
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../src/utils";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <a className={styles.title} href = "/">Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menubtn} scr={getImageUrl("nav/menuIcon.png")} alt="menudashbtn"/>
        <ul className={styles.menuitems}>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#experience">Expereience</a>
            </li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
