import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
// import EditAlertModal from "./edit-alert";
import AlertHtml from "./alert-html";
import Alert from "./alert-main";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import EditAlertModal from "./edit-alert";
import './alert.scss'

const AlertComponent = ( ) => {

    const location = useLocation();
    const props = location.state.inputs;
    const { open: openEditAlert, close: closeEditAlert, ModalWrapper: ModalWrapperEditAlert } = useModal();
    const { open: openAlert, close: closeAlert, ModalWrapper: ModalWrapperAlert } = useModal();

    const [activeTab, setActiveTab] = useState(0);
    console.log(props, "props in Alert.js");
    // const themeClass = {props.themeValue?}
    return (
        <>
        <ModalWrapperEditAlert >
            <EditAlertModal close={closeEditAlert} data={props} />
        </ModalWrapperEditAlert >
        <ModalWrapperAlert >
            <Alert close={closeAlert} AlertProps={props} />
        </ModalWrapperAlert >

        <div className="header-output">
            <div className="component-header">
                <div className="header-left">
                    <h1>Alert </h1> <span> Component</span> 
                </div>
                <div className="header-right">
                    <div className="button-section">
                        <Link to="/" className="link-button" aria-label="back to various component homepage">
                            Back
                        </Link>
                        <button class="buttons" aria-label="Edit values for Alert Component" onClick={openEditAlert} >
                            Edit
                        </button>
                    </div>
                </div>
            </div>

            <div className="alert-section">
                <button className="alert-button" aria-label="Show Custom Alert" onClick={openAlert} >
                    Show Custom Alert
                </button>
            </div>

        </div>

        <div className="card-tabs">
            <button className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>
                HTML
            </button>
            <button className={activeTab === 0 ? "active" : ""} onClick={() => setActiveTab(0)}>
                CSS
            </button>
        </div>

        <div className="card-content">
        {activeTab === 0 ? (
            <SyntaxHighlighter language="css" style={coy}>
                {/* {CustomStyleTooltip.componentStyle.rules[0]} */}
            </SyntaxHighlighter>   
        ) : (
            <AlertHtml AlertProps ={props} />
        )}
        </div>
        
        </>
    );
};
export default AlertComponent;
