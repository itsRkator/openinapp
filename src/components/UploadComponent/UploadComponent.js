import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";

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
  const [selectedFile, setSelectedFile] = useState(null);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [selectedFileContent, setSelectedFileContent] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    const file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const headers = Object.keys(results.data[0]);
        setTableHeaders(headers);
        setSelectedFileContent(
          results.data.map((obj) => {
            return {
              id: obj.id,
              links: obj.links,
              prefix: obj.prefix,
              tags: obj["select tags"].split(", "),
              selectedTags:
                obj["selected tags"].split(", ")[0] === ""
                  ? []
                  : obj["selected tags"].split(", "),
            };
          })
        );
        setIsFilePicked(true);
        setLoading((prevState) => !prevState);
      },
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const headers = Object.keys(results.data[0]);
        setTableHeaders(headers);
        setSelectedFileContent(
          results.data.map((obj) => {
            return {
              id: obj.id,
              links: obj.links,
              prefix: obj.prefix,
              tags: obj["select tags"].split(", "),
              selectedTags:
                obj["selected tags"].split(", ")[0] === ""
                  ? []
                  : obj["selected tags"].split(", "),
            };
          })
        );
        setIsFilePicked(true);
        setLoading((prevState) => !prevState);
      },
    });
  };

  const uploadHandler = () => {
    setShowTable((prevState) => !prevState);
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
        <div style={{ display: "flex" }}>
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
                strokeWidth="1.5"
                strokeLinecap="round"
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
        {showTable && (
          <div className={styles.uploads}>
            <p className={styles.tableHeader}>Uploads</p>
            <UploadsTableComponent
              data={selectedFileContent}
              headers={tableHeaders}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default UploadComponent;
