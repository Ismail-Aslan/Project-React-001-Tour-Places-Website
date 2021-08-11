import React from "react";
import styles from "./Navbar.module.css"

function Navbar(props) {

    


    return(
        <div className={styles["navbar"]}>
            <div >
                <a href="#" className={styles["navbar-item"]}>About Us</a>
                <a href="#" className={styles["navbar-item"]}>For you</a>
                <a href="#" className={styles["navbar-item"]}>Services</a>
                <a href="#" className={styles["navbar-item"]}>Blog</a>
                <a href="#" className={styles["navbar-item"]}>Vlog</a>
                <a href="https://github.com/Ismail-Aslan/Project-React-001-Tour-Places-Website" className={styles["navbar-item"]}>Contact</a>
            </div>
        </div>
    );
}

export default Navbar;