import React from "react";
import closeIcon from "../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const TableDetail = (props)=>{

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
            <p>Table</p>
                <button className="close-button" aria-label="close table details modal" onClick={close}>
                    <img alt="close modal" src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the Table section are below:
            </h1>
            <p>Please do follow the given instruction while creating the Table component.</p>
            <div className="detail-content">
                <ul>
                    <li>Text for table caption should not be more than 25 characters.</li>
                    <li>User can choose the if they want table style to be striped type.</li>
                    <li>User can choose the if they want pagination in the table.</li>
                    <li>If user chooses pagination he/she can further select number of items displayed per page.</li>
                    <li>User can select the theme of the table which applies to table header from the dropdown.</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
export default TableDetail;