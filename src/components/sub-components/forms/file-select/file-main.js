import React, { useState } from "react";
import closeIcon from "../../../asset/images/cross-icon.png";

function FileMains(props) {
  const [theInputKey, setInputKey] = useState("1");
  const [fileNames, setFileNames] = useState([]);

  const closeFile = (index) => {
    const updatedFileNames = [...fileNames];
    updatedFileNames.splice(index, 1);
    setFileNames(updatedFileNames);
  };

  const handleChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFileNames(selectedFiles);
    setInputKey(Date.now().toString());
  };
  // const handleLabelClick = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className="input-output file-output">
      <div className="file-conatiner">
        <p className="file-label">{props.fileVals.selectlabelValue}</p>
        <div
          className={`file-upload ${
            props.fileVals?.themeValue === "Dark"
              ? "file-Dark"
              : props.fileVals?.themeValue === "cg1"
              ? "file-Cg1"
              : props.fileVals?.themeValue === "cg2"
              ? "file-Cg2"
              : props.fileVals?.themeValue === "Normal"
              ? "file-Normal"
              : ""
          } ${
            props.fileVals?.selectsizeValue === "100%"
              ? "full-width"
              : props.fileVals?.selectsizeValue === "75%"
              ? "width-option"
              : props.fileVals?.selectsizeValue === "50%"
              ? "halfwidth"
              : props.fileVals?.selectsizeValue === "25%"
              ? "one-fourth"
              : ""
          }`}
        >
          <div className="file-upload-container">
          <label className="file-upload-label" htmlFor="fileupload" aria-label="File Upload Button" id="buttonlabel" tabIndex="0">
            <input type="file" id="fileupload" key={theInputKey || ""} multiple={props.fileVals.typeValue === "Multiple"} onChange={handleChange} />
            <p>Upload File</p>
          </label>
          <p className="file-text">Drop your Files Here</p>
          </div>
          <div id="fileList">
              {fileNames.map((file, index) => (
                <div key={index} className="file-item">
                  <span className="file-name">{file.name}</span>
                  <button className="close-button" aria-label="Close" onClick={() => closeFile(index)}>
                    <img src={closeIcon} alt="Close" />
                  </button>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default FileMains;
