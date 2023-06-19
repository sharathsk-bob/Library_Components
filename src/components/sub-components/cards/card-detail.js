import FocusTrap from "focus-trap-react";
import React from "react";
import closeIcon from "../../../components/asset/images/cross-white.png";

const CardDetail =(props)=>{
    
  const{close} = props; 
     
  return (
    <FocusTrap
      focusTrapOptions={{
        onDeactivate: close
      }}
    >
    <div className="modal_wapper">
      <div className="modal-content header-modalcontainer detail-container">
      <div className="detail-header">
          <p>Card</p>
          <button className="close-button" aria-label="close card details modal" onClick={close}>
            <img alt="close modal" src={closeIcon}></img>
          </button>
        </div>
  
        <div className="modal-container details-section">
          <h1>
            Details for the Card section are below:
          </h1>
          <p>Please do follow the given instruction while creating the Card component.</p>
          <div className="detail-content">
            <ul>

              <li>Card title should not be more than 10 characters.</li>
              <li>Card description should not be more than 100 words.</li>
              <li>User can select if he/she want to add a button.</li>
              <li>If user selects to add a button then he can choose upto two buttons maximum and their respective text.</li>
              <li>User can choose if he/she wants to add a image.</li>
              <li>User can select the card width.</li>
              <li>User can select the card theme.</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
    </FocusTrap>
  );
};
export default CardDetail;