import React from "react";
import closeIcon from "../../asset/images/cross-white.png";
import FocusTrap from "focus-trap-react";

const BreakpointLayoutDetail = (props)=>{

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
            <p>Breakpoint Layout</p>
                <button className="close-button" aria-label="close Breakpoint Layout details modal" onClick={close}>
                    <img src={closeIcon}></img>
                </button>
            </div>
    
        <div className="modal-container details-section">
            <h1>
            Details for the Breakpoint Layout section are below:
            </h1>
            <p>Please do follow the given instruction while creating the Breakpoint Layout component.</p>
            <div className="detail-content">
                <ul>
                    <li>User can select breakpoint layout options from 1 to 4 from a dropdown.</li>
                    <li>User can enter text for the title of the column for the options he/she initially selected.</li>
                    <li>User can enter text for the content of the column  for the options he/she initially selected.</li>
                    <li>User can select the theme of the breakpoint layout from the dropdown.</li>
                </ul>
            </div>
        </div>
        </div>
      </div>
      </FocusTrap>
    ); 
};
export default BreakpointLayoutDetail;