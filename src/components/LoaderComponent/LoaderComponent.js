import React from "react";
import styles from "./LoaderComponent.module.css";

const LoaderComponent = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.circularLoader}></div>
    </div>
  );
};

export default LoaderComponent;
