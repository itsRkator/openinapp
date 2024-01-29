import { Link } from "react-router-dom";

import { ReactComponent as BaseIcon } from "../../assets/icons/base.svg";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as UploadIcon } from "../../assets/icons/upload.svg";
import { ReactComponent as InvoiceIcon } from "../../assets/icons/invoice.svg";
import { ReactComponent as ScheduleIcon } from "../../assets/icons/schedule.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";
import { ReactComponent as NotificationIcon } from "../../assets/icons/notification.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";

import styles from "./SidebarComponent.module.css";
import { useState } from "react";

const SidebarComponent = ({ onClose }) => {
  const [activeLink, setActiveLink] = useState("");

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  const hideSidebarHandler = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = "none";
    onClose();
  };

  return (
    <div id="sidebar" className={styles.sidebar}>
      <button
        type="button"
        className={styles.sidebarCloseButton}
        onClick={hideSidebarHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M25.3424 14.6568L19.6855 20.3137M19.6855 20.3137L14.0287 14.6568M19.6855 20.3137L14.0287 25.9706M19.6855 20.3137L25.3424 25.9706"
            stroke="#999CA0"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className={styles.sidebarTop}>
        <Link to={"/"} className={styles.sidebarHeader}>
          <BaseIcon className={styles.sidebarHeaderIcon} />
          <span className={styles.sidebarHeaderText}>Base</span>
        </Link>
      </div>
      <div className={styles.sidebarList}>
        <Link
          to={"/dashboard"}
          className={
            styles.sidebarListItem +
            " " +
            (activeLink === "dashboard" ? styles.active : "")
          }
          onClick={() => handleActiveLink("dashboard")}
        >
          <DashboardIcon className={styles.sidebarListItemIcon} />
          <span className={styles.sidebarListItemText}>Dashboard</span>
        </Link>
        <Link
          to={"/upload"}
          className={
            styles.sidebarListItem +
            " " +
            (activeLink === "upload" ? styles.active : "")
          }
          onClick={() => handleActiveLink("upload")}
        >
          <UploadIcon className={styles.sidebarListItemIcon} />
          {/* <span className={styles.sidebarListItemText}>Upload</span> */}
        </Link>
        <Link
          to={"/invoice"}
          className={
            styles.sidebarListItem +
            " " +
            (activeLink === "invoice" ? styles.active : "")
          }
          onClick={() => handleActiveLink("invoice")}
        >
          <InvoiceIcon className={styles.sidebarListItemIcon} />
          <span className={styles.sidebarListItemText}>Invoice</span>
        </Link>
        <Link
          to={"/schedule"}
          className={
            styles.sidebarListItem +
            " " +
            (activeLink === "schedule" ? styles.active : "")
          }
          onClick={() => handleActiveLink("schedule")}
        >
          <ScheduleIcon className={styles.sidebarListItemIcon} />
          <span className={styles.sidebarListItemText}>Schedule</span>
        </Link>
        <Link
          to={"/calendar"}
          className={
            styles.sidebarListItem +
            " " +
            (activeLink === "calendar" ? styles.active : "")
          }
          onClick={() => handleActiveLink("calendar")}
        >
          <CalendarIcon className={styles.sidebarListItemIcon} />
          <span className={styles.sidebarListItemText}>Calendar</span>
        </Link>
        <Link
          to={"/notification"}
          className={
            styles.sidebarListItem +
            " " +
            (activeLink === "notification" ? styles.active : "")
          }
          onClick={() => handleActiveLink("notification")}
        >
          <NotificationIcon className={styles.sidebarListItemIcon} />
          <span className={styles.sidebarListItemText}>Notification</span>
        </Link>
        <Link
          to={"/settings"}
          className={
            styles.sidebarListItem +
            " " +
            (activeLink === "settings" ? styles.active : "")
          }
          onClick={() => handleActiveLink("settings")}
        >
          <SettingsIcon className={styles.sidebarListItemIcon} />
          <span className={styles.sidebarListItemText}>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default SidebarComponent;
