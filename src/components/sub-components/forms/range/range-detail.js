import React from "react";
import closeIcon from "../../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const RangeDetail = (props)=>{

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
            <p>Range</p>
                <button className="close-button" aria-label="close range details modal" onClick={close}>
                    <img alt="close modal" src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the Range section are below:
            </h1>
            <p>Please do follow the given instruction while creating the Range component.</p>
            <div className="detail-content">
                <ul>
                    <li>Text for label of range should not be more than 15 characters.</li>
                    <li>User can specify minimum and maximum values for range.</li>
                    <li>User can select width of the range section.</li>
                    <li>User can select the theme of the range from the dropdown.</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
export default RangeDetail;