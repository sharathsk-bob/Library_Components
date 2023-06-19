import React from "react";
import closeIcon from "../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const FooterDetail =(props)=>{

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
          <p>Footer</p>
          <button className="close-button" aria-label="close footer details modal" onClick={close}>
            <img src={closeIcon}></img>
          </button>
        </div>
        <div className="modal-container details-section">
          {/* <h1>
            Details for the Footer section are below:
          </h1> */}
          <p>Please do follow the given instruction while creating the Footer component.</p>
          <div className="detail-content">
            <ul>
              <li>Footer text should be less than 25 characters.</li>
              <li>User can select the social icons he/she wishes to add.</li>
              <li>User can select the theme of the footer section.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </FocusTrap>
  );
};
export default FooterDetail;