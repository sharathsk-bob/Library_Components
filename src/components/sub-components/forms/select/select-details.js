import React from "react";
import closeIcon from "../../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const SelectDetail = (props)=>{

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
            <p>Select</p>
                <button className="close-button" aria-label="close select details modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the Select section are below:
            </h1>
            <p>Please do follow the given instruction while creating the Select component.</p>
            <div className="detail-content">
                <ul>
                    <li>Text for label for select should not be more than 25 characters.</li>
                    <li>User can specify number of options for the select dropdown and the the option text for each of them.</li>
                    <li>User can select the type of select either single/multiple.</li>
                    <li>User can select the width of the select from the dropdown.</li>
                    <li>User can select the theme of the select from the dropdown.</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
export default SelectDetail;