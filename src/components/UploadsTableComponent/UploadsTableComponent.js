// TableComponent.jsx

import React, { useState } from "react";

import {ReactComponent as RemoveIcon } from '../../assets/icons/removeIcon.svg';

import styles from "./UploadsTableComponent.module.css";

const DummyData = [
  {
    siNo: 1,
    links: "www.google.com",
    prefix: "prefixsample",
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    selectedTags: ["Tag 1", "Tag 2"],
  },
  {
    siNo: 2,
    links: "www.google.com",
    prefix: "prefixsample",
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    selectedTags: ["Tag 1", "Tag 2"],
  },
  {
    siNo: 3,
    links: "www.google.com",
    prefix: "prefixsample",
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    selectedTags: ["Tag 1", "Tag 4"],
  },
  // Add more dummy data as needed
];

const TableComponent = () => {
  const [tableData, setTableData] = useState(DummyData);

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

  return (
    <div className={styles.container}>
      <table className={styles.table}>
      <thead>
        <tr>
          <th>Si No.</th>
          <th>Links</th>
          <th>Prefix</th>
          <th>Add Tags</th>
          <th>Selected Tags</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index.toString() + Math.random().toString()}>
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
