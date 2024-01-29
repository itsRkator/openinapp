import { Link } from "react-router-dom"

import { ReactComponent as BaseIcon } from "../../assets/icons/base.svg";

import styles from "./MiniSidebarComponent.module.css";

const MiniSidebarComponent = () => {
    return (
        <div className={styles.miniSidebar}>
        <button type="button" className={styles.miniSidebarHandlerButton}>
          <span className={styles.miniSidebarHandlerButtonLine}></span>
          <span className={styles.miniSidebarHandlerButtonLine}></span>
          <span className={styles.miniSidebarHandlerButtonLine}></span>
        </button>
        <Link to={"/"} className={styles.miniSidebarHeader}>
          <BaseIcon className={styles.miniSidebarHeaderIcon} />
          <span className={styles.sidebarHeaderText}>Base</span>
        </Link>
      </div>
    )
}

export default MiniSidebarComponent;