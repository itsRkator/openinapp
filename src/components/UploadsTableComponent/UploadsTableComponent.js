import React, { useEffect, useState } from "react";

import {ReactComponent as RemoveIcon } from '../../assets/icons/removeIcon.svg';

import styles from "./UploadsTableComponent.module.css";


const TableComponent = ({data, headers}) => {

  const [tableData, setTableData] = useState(data);
  const [tableHeaders, setTableHeaders] = useState(headers);

  console.log(headers, data);

  const handleTagSelection = (index, selectedTag) => {
    const updatedData = [...tableData];
    updatedData[index].selectedTags = [
      ...updatedData[index].selectedTags,
      selectedTag,
    ];
    setTableData(updatedData);
  };

  const handleSelectedTagRemove = (index, tagIndex) => {
    const updatedData = [...tableData];
    updatedData[index].selectedTags.splice(tagIndex, 1);
    setTableData(updatedData);
  };

  useEffect(() => {
    setTableData(data);
    setTableHeaders(headers);

  }, [data, headers]);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={index.toString() + Math.random().toString()}>{header.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={row.id}>
            <td>{row.siNo}</td>
            <td><a href={row.links} target="_blank" rel="noreferrer">{row.links}</a></td>
            <td>{row.prefix}</td>
            <td>
              <div className={styles.tagsDropdown}>
                <select
                  value={""}
                  onChange={(e) => handleTagSelection(index, e.target.value)}
                >
                  <option value="" disabled>
                    Select Tags
                  </option>
                  {row.tags.map((tag, tagIndex) => (
                    <option key={tagIndex.toString() + Math.random().toString()} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            </td>
            <td>
              <div className={styles.selectedTags}>
                {row.selectedTags.map((tag, tagIndex) => (
                  <div key={tagIndex.toString() + Math.random().toString()} className={styles.tag}>
                    {tag}
                    <button
                      className={styles.removeButton}
                      onClick={() => handleSelectedTagRemove(index, tagIndex)}
                    >
                      <RemoveIcon />
                    </button>
                  </div>
                ))}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TableComponent;
