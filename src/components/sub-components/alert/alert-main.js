import React from 'react';
import closeIcon from "../../asset/images/cross-white.png";
import closebIcon from "../../asset/images/cross-icon.png";
import FocusTrap from "focus-trap-react";
import './alert.scss';

function Alert(props) {

    const{close, AlertProps} = props;
    console.log(AlertProps, "props in Alert-main.js");

    return(
        <>
        <FocusTrap focusTrapOptions={{ onDeactivate: close }}>
            <div className="alert_wrapper">
                <div className={`alert-content ${AlertProps?.Choice_Width == "25"?"alert-w25":AlertProps?.Choice_Width == "50"?"alert-w50":AlertProps?.Choice_Width == "75"?"alert-w75":AlertProps?.Choice_Width == "100"?"alert-w100":"" }`}>
                    <div className={`alert-header ${AlertProps?.Choice_Theme == "Dark"?"dark":AlertProps?.Choice_Theme == "cg1"?"blue":AlertProps?.Choice_Theme == "cg2"?"purple":AlertProps?.Choice_Theme == "Normal"?"normal":"" }`}>
                        <p>{ AlertProps.Choice_Alerttype == 'warning' ? ("Warning Alert") : 
                            AlertProps.Choice_Alerttype == 'success' ? ("Success Alert") :
                            AlertProps.Choice_Alerttype == 'info' ? ("Information Alert") :
                            AlertProps.Choice_Alerttype == 'error' ? ("Error Alert") : ("")}
                        </p>
                        <button className="close-button" aria-label="close alert popup" onClick={close}>
                            { AlertProps?.Choice_Theme == "Normal"?
                                <img alt="close alert popup" src={closebIcon}></img> :
                                <img alt="close alert popup" src={closeIcon}></img>
                            }
                        </button>
                    </div>
            
                    <div className="alert-container">
                        <div className='icon-section'>
                            { AlertProps.Choice_Alerttype == 'warning' ? (
                                <i class="fa fa-warning fa-2x warn-delete" aria-hidden="true"></i>
                            ) : AlertProps.Choice_Alerttype == 'success' ? (
                                <i class="fa fa-check-circle fa-2x success-icon" aria-hidden="true"></i>
                            ) : AlertProps.Choice_Alerttype == 'info' ? (
                                <i class="fa fa-info-circle fa-2x info-icon" aria-hidden="true"></i>
                            ) : (
                                <i class="fa fa-times-circle fa-2x error-icon" aria-hidden="true"></i>
                            )}                        
                        </div>

                        <div className='text-section'>
                            <p>{AlertProps.alerttext}</p>
                        </div>
                        
                        <div className='alertbtn-section'>
                            <button className={`btn-alert`} aria-label="okay button" onClick={close}>Okay</button>
                            {/* <button className='btn-alert' onClick={close}>No</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </FocusTrap>
        </>
    )
}

export default Alert;