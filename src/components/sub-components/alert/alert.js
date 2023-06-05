import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
// import EditAlertModal from "./edit-alert";
import AlertHtml from "./alert-html";
import Alert from "./alert-main";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import EditAlertModal from "./edit-alert";
import './alert.scss'

export const CustomStyleAlert = styled.div`
.alert-section {
    margin: 32px auto;
    text-align: center;
}

.alert-button {
    padding: 0.5rem;
    font-weight: bold;
    background-color: var(--color-capgemini-blue);
    border-color: var(--color-capgemini-blue);
    color: var(--color-white);
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

//Main Alert modal Styling start
.alert_wrapper{
    align-items: center;
    background-color: rgba(36, 36, 36, 0.75);
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    width: 100%;
    justify-content: center;
    left: 0;
    margin: 0 auto;
    overflow-x: hidden;
    position: fixed;
    top: 0;
    z-index: 100;
}

.alert-content{
    background-color: #ffff;
    box-shadow: 0 12px 25px 0 rgba(199, 175, 189, 0.25);
    margin: 20px auto;
    // width: 46vw;
}

.alert-w25 {
    width: 25%;
    @media (max-width: 576px) {
        width: 50% !important;
    }
}
.alert-w50 {
    width: 50%;
}
.alert-w75 {
    width: 75%;
}
.alert-w100 {
    width: 100%;
    margin: 0 24px;
    @media (max-width: 576px) {
        width: 95%;
        margin: 0 12px !important;
    }
}

.alert-container{
    overflow-x: auto;
    margin: 16px auto;
}

.alert-header {
    display: flex;
    padding: 8px 16px;
    justify-content: space-between;
    align-items: center;
    p { 
        margin: 0 0;
    }
}

//Themes
.dark {
    background-color: var(--color-black);
    color: var(--color-white);
}

.normal {
    background-color: var(--color-white);
    color: var(--color-black);
    border: 1px solid var(--color-black);
}

.blue {
    background-color: var(--color-capgemini-blue);
    color: var(--color-white);
}

.purple {
    background-color: var(--color-purple-wbh);
    color: var(--color-white);
}

.close-button{
    border: none; 
    background: transparent;
    cursor: pointer;
    float: right;
}

.icon-section {
    text-align: center;
    padding: 16px 8px;
}

.warn-delete {
    color: #F37020;
}

.success-icon {
    color: #6EB500;
}

.info-icon {
    color: var(--color-grey-light);
}

.error-icon {
    color: #ff0000;
}

.text-section {
    padding: 0 1em;
    text-align: center;
    word-wrap: break-word;
}

.alertbtn-section {
    text-align: center;
    margin-bottom: 1em;
    .btn-alert {
        padding: 0.25em 1.4em;
        font-size: 1em;
        border: 1px solid #999;
        color: var(--color-black);
        background: var(--color-white);
    }
    .btn-alert:hover {
        background-color: var(--color-capgemini-blue);
        color: var(--color-white);
        outline: 0.6em auto -webkit-focus-ring-color;
        box-shadow: none;
    }
    .btn-alertert:focus-visible{
        border: 1.5px var(--color-black) solid;
    }
}

`;

const AlertComponent = ( ) => {

    const location = useLocation();
    const props = location.state.inputs;
    const { open: openEditAlert, close: closeEditAlert, ModalWrapper: ModalWrapperEditAlert } = useModal();
    const { open: openAlert, close: closeAlert, ModalWrapper: ModalWrapperAlert } = useModal();

    const [activeTab, setActiveTab] = useState(0);

    const formattedCSS = CustomStyleAlert.componentStyle.rules[0];

    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(formattedCSS)
        .then(() => {
            setCopied(true);
            setTimeout(() => {
            setCopied(false);
            }, 2000);
        })
        .catch((error) => {
            console.error('Failed to copy to clipboard:', error);
        });
    };

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
            <button className={activeTab === 1 ? "active" : ""} aria-label="HTML Page of Alert Component" onClick={() => setActiveTab(1)}>
                HTML
            </button>
            <button className={activeTab === 0 ? "active" : ""} aria-label="CSS Page of Alert Component" onClick={() => setActiveTab(0)}>
                CSS
            </button>
        </div>

        <div className="card-content">
        {activeTab === 0 ? (
            <>
                <div className='clipboard-div'>
                    <button className='clipboard-btn' aria-label="copy to clipboard button" onClick={copyToClipboard}>
                        <i className={`fa ${copied ? 'fa-check' : 'fa-copy'}`} >
                            {copied ? ' Copied!' : ' Copy Code'}
                        </i>
                    </button>
                </div>
                <SyntaxHighlighter language="css" style={coy}>
                    {formattedCSS}
                </SyntaxHighlighter>  
            </>
        ) : (
            <AlertHtml AlertProps ={props} />
        )}
        </div>
        </>
    );
};
export default AlertComponent;
