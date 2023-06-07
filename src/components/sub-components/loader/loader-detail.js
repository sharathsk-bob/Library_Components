import React from "react";
import closeIcon from "../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const LoaderDetail = (props)=>{

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
            <p>Loader</p>
                <button className="close-button" aria-label="close loader details modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the Loader section are below:
            </h1>
            <p>Please do follow the given instruction while creating the Loader component.</p>
            <div className="detail-content">
                <ul>
                    <li>User can select the loader type as from  mainly - horizontal or circular.</li>
                    <li>Ussr can select the timeout value from - 1000ms,2000ms,5000ms for disappearing loader.</li>
                    <li>User can select size of the loader from the dropdown.</li>
                    <li>User can select the theme of the loader from the dropdown.</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
export default LoaderDetail;