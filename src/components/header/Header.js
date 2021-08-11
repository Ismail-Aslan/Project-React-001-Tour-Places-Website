import React from "react";
import styles from "./Header.module.css"

function Header(props) {

    


    return(
        <div>
            <h1 className={styles["page-header"]}>Popular Tour Places</h1>
        </div>
    );
}

export default Header;