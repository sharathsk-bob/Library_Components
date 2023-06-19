import React from "react";
import closeIcon from "../../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const FileSelectDetail = (props)=>{

    const{close} = props;
 
    return (
        <FocusTrap
			focusTrapOptions={{
				onDeactivate: close
			}}
		>
      <div className="modal_wapper">
        <div className="modal-content detail-container">
            <div className="detail-header">
            <p>File Upload</p>
                <button className="close-button" aria-label="close file upload details modal" onClick={close}>
                    <img alt="close modal" src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the File Upload section are below:
            </h1>
            <p>Please do follow the given instruction while creating the File Upload component.</p>
            <div className="detail-content">
                <ul>
                    <li>Text for label for file upload should not be more than 15 characters.</li>
                    <li>User can select if they want to upload single or multiple option for file upload.</li>
                    <li>User can select width of the file upload input section.</li>
                    <li>User can select the theme of the file upload from the dropdown.</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
export default FileSelectDetail;