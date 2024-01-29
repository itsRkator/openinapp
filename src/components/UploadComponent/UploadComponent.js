import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import UploadsTableComponent from "../UploadsTableComponent/UploadsTableComponent";
import SidebarComponent from "../SidebarComponent/SidebarComponent";

import userImage from "../../assets/images/userImage.png";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";
import { ReactComponent as ExcelIcon } from "../../assets/icons/excelSheet.svg";
import { ReactComponent as UploadIcon } from "../../assets/icons/uploadIcon.svg";
import { ReactComponent as BaseIcon } from "../../assets/icons/base.svg";

import styles from "./UploadComponent.module.css";

const UploadComponent = ({ onLogout }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    setLoading((prevState) => !prevState);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log(file);
    setSelectedFile(file);
    setIsFilePicked(true);
    setLoading((prevState) => !prevState);
  };

  const uploadHandler = () => {
    console.log(selectedFile);
  };

  const removeFileHandler = () => {
    setSelectedFile(null);
    setIsFilePicked(false);
  };

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(loaderTimeout);
  }, [loading]);

  const handleSidebar = () => {
    setIsSidebar((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.miniSidebar}>
        <div style={{display: "flex"}}>
          <button
            type="button"
            className={styles.miniSidebarHandlerButton}
            onClick={handleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
            >
              <path
                d="M1 1H17M1 13H17M1 7H17"
                stroke="#231F20"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <Link to={"/"} className={styles.miniSidebarHeader}>
            <BaseIcon className={styles.miniSidebarHeaderIcon} />
            <span className={styles.sidebarHeaderText}>Base</span>
          </Link>
        </div>
        <div>
          <div className={styles.miniSidebarUserHandler}>
            <BellIcon className={styles.miniSidebarBellIcon} />
            <img src={userImage} alt="User" onClick={onLogout} />
          </div>
        </div>
      </div>
      {isSidebar && <SidebarComponent onClose={handleSidebar} />}
      <div className={styles.container}>
        <div className={styles.uploadHeader}>
          <p className={styles.uploadHeaderTitle}>Upload CSV</p>
          <div className={styles.uploadHeaderBtn}>
            <BellIcon className={styles.bellIcon} />
            <img src={userImage} alt="User" onClick={onLogout} />
          </div>
        </div>
        <div className={styles.uploadBody}>
          <div className={styles.uploadBodyContent}>
            <div className={styles.uploadBodyForm}>
              <form>
                <div
                  className={styles.dragAndDrop}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    className={styles.uploadBodyFormInput}
                    onChange={handleFileChange}
                  />
                  <div className={styles.excelIcon}>
                    <ExcelIcon />
                  </div>
                  {!isFilePicked && (
                    <span
                      className={!isFilePicked ? styles.dragAndDropText : ""}
                    >
                      Drag and drop your file here or{" "}
                      <button
                        type="button"
                        className={styles.browseBtn}
                        onClick={() => fileInputRef.current.click()}
                      >
                        Browse
                      </button>
                    </span>
                  )}
                  {isFilePicked && (
                    <span
                      className={isFilePicked ? styles.selectedFileDetails : ""}
                    >
                      <p className={styles.selectedFileDetailsText}>
                        {selectedFile.name}
                      </p>
                      <button
                        type="button"
                        className={styles.removeBtn}
                        onClick={removeFileHandler}
                      >
                        Remove
                      </button>
                    </span>
                  )}
                </div>
                <button
                  disabled={!isFilePicked}
                  type="button"
                  className={styles.uploadBtn}
                  onClick={uploadHandler}
                >
                  {!loading && (
                    <>
                      <UploadIcon className={styles.uploadIcon} /> Upload{" "}
                    </>
                  )}
                  {loading && <LoaderComponent />}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.uploads}>
          <p className={styles.tableHeader}>Uploads</p>
          <UploadsTableComponent />
        </div>
      </div>
    </>
  );
};

export default UploadComponent;
