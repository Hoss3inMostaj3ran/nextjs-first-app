import React from "react";
import styles from "./notfound.module.css";

const NotFound = () => {
  return (
    <div id={styles.notfound}>
      <div className={styles.notfound}>
        <div className={styles.notfound404}>
          <h1>
            4<span>0</span>4
          </h1>
        </div>
        <h2>the page you requested could not found</h2>
        <form className={styles.notfoundSearch}>
          <input type="text" placeholder="Search..." />
        </form>
      </div>
    </div>
  );
};

export default NotFound;
