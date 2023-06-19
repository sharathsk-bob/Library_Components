import React from "react";
import closeIcon from "../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";
import "./header-details.scss";

const HeaderDetail =(props)=>{
   
    const{close} = props;
        
    return (
      <FocusTrap
			focusTrapOptions={{
				// escapeDeactivates: false
				onDeactivate: close
			}}
		>
      <div className="modal_wapper">
        <div className="modal-content detail-container">
          <div className="detail-header">
            <p>Header</p>
            <button className="close-button" aria-label="close header details modal" onClick={close}>
              <img alt="close modal" src={closeIcon}></img>
            </button>
          </div>

          <div className="modal-container details-section">
            <h1>
             Details for the Header section are below:
            </h1>
            <p>Please do follow the given instruction while creating the Header component.</p>
            <div className="detail-content">
              <ul>
                <li>Application name should be less than 15 characters.</li>
                <li>It is mandatory for user to specify whether you want to have app logo.</li>
                <li>It is mandatory for user to specify whether you want to have profile logo</li>
                <li>Username should be less than 10 characters.</li>
                <li>It is mandatory for user to specify whether you want capgemini logo in the header section.</li>
              </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    );
};
 export default HeaderDetail;