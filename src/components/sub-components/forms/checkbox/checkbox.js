import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import useModal from "../../use-modal/use-modal";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CheckBox from "./checkbox-main";
import CheckBoxHtml from "./checkbox-html";
import EditCheckBoxModal from "./edit-checkbox";

export const CustomStyleCheckBox = styled.div`
.CheckBox-Content {
    font-size:16px;
    margin-bottom: 32px;
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        font-size:12px;
    }
}

.CheckBox-Content fieldset {
    // border: 1px solid #999999 !important;
    margin-bottom: 1.25em !important;
    padding: 0.6em !important;
}

.CheckBox-Content fieldset legend {
    float: none;
    margin-bottom: 0px;
    font-size: 1.1em;
    background-color: rgb(241, 244, 248)!important;
    width: auto;
    display: block;
    max-width: 100%;
    padding: 0px 6px;
    line-height: inherit;
    color: inherit;
    white-space: normal;
}

.block-element {
    display: flex;
    align-items: center;
    margin-right: 16px;

}

.block-element input [type = radio] {
    appearance: auto !important;
}

.disp-col {
    display: flex;
    flex-direction: column;
}

.disp-row {
    display: flex;
    flex-direction: row;
}

.CheckBox-Content fieldset label {
    display: flex;
}

.label-container {
    position: relative;
    margin-bottom: 12px;
    cursor: pointer;
    padding-left: 2em;
    // font-size: 22px;
    user-select: none;
}

.block-element label input {
    margin-right: 4px;
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5em;
    width: 1.5em;
    // opacity: 0;
    // height: 0;
    // width: 0;
    cursor: pointer;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5em;
    width: 1.5em;
    background-color: #eee;
}

/* On mouse-over, add a grey background color */
.label-container:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */

.s-dark .label-container input:checked ~ .checkmark {
    background-color: var(--color-black);
}

.s-blue .label-container input:checked ~ .checkmark {
    background-color: var(--color-capgemini-blue);
}

.s-purple .label-container input:checked ~ .checkmark {
    background-color: var(--color-purple-wbh);
}

.s-normal .label-container input:checked ~ .checkmark {
    background-color: #2196F3;
}


/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.label-container input:checked ~ .checkmark:after {
    display: block;
}
  
/* Style the checkmark/indicator */
.label-container .checkmark:after {
    left: 0.6em;
    top: 0.32em;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

// custom radio button 
/* Create a custom radio button */
.radiomark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5em;
    width: 1.5em;
    background-color: #eee;
    border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.label-container:hover input ~ .radiomark {
    background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.s-dark .label-container input:checked ~ .radiomark {
    background-color: var(--color-black);
}

.s-blue .label-container input:checked ~ .radiomark {
    background-color: var(--color-capgemini-blue);
}

.s-purple .label-container input:checked ~ .radiomark {
    background-color: var(--color-purple-wbh);
}

.s-normal .label-container input:checked ~ .radiomark {
    background-color: #2196F3;
}


/* Create the indicator (the dot/circle - hidden when not checked) */
.radiomark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.label-container input:checked ~ .radiomark:after {
    display: block;
}

/* Style the indicator (dot/circle) */
.label-container .radiomark:after {
    top: 0.5em;
    left: 0.5em;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background: white;
}

.cb-normal {
    background-color: rgb(241, 244, 248)!important;
    border-style: solid;
    border-width: medium; 
    border-color: none !important;
}

.cb-dark {
    background-color: rgb(241, 244, 248)!important;
    border-style: solid;
    border-width: medium; 
    border-color: var(--color-black) !important;
}

.cb-blue {
    background-color: rgb(241, 244, 248)!important;
    border-style: solid;
    border-width: medium; 
    border-color: var(--color-capgemini-blue) !important;
}

.cb-purple {
    background-color: rgb(241, 244, 248)!important;
    border-style: solid;
    border-width: medium; 
    border-color: var(--color-purple-wbh) !important;
}

.cb-w25 {
    width: 25%;
    flex-wrap: wrap;
    // margin: 0 auto;
    @media (max-width: 575px) {
        width: 98%;
    }
}
.cb-w50 {
    width: 50%;
    flex-wrap: wrap;
}
.cb-w75 {
    width: 75%;
    flex-wrap: wrap;
}
.cb-w100 {
    width: 98%;
    flex-wrap: wrap;
}

.block-element input:focus-visible {
    border: 5px black solid !important;
}
`;

const CheckBoxComponent = ( ) => {

    const location = useLocation();
    const { open: openEditCheckBox, close: closeEditCheckBox, ModalWrapper: ModalWrapperEditCheckBox } = useModal();
    const props = location.state.inputs;
    console.log(props, "valuee mains props");
  
    const [activeTab, setActiveTab] = useState(0);
    const formattedCSS = CustomStyleCheckBox.componentStyle.rules[0];
  
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
  
    return (
    <>
        <ModalWrapperEditCheckBox>
            <EditCheckBoxModal close={closeEditCheckBox} data={props} />
        </ModalWrapperEditCheckBox>
        <div className= {`header-output ${props?.themeValue == "Normal"? "normal-header":""}`}>
            <div className="component-header">
            <div className="header-left">
                <h1>{`${props?.Choice_SelectionType}`}</h1><span> Component</span> 
            </div>
            <div className="header-right"> 
                <div className="button-section">
                <Link to="/formcomponents" className="link-button">
                    Back
                </Link>
                <button class="buttons" onClick={openEditCheckBox}  >
                    Edit
                </button>
                </div>
            </div>
            </div>
            <CheckBox CheckBoxProps={props}/>
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
            <>
            <div className='clipboard-div'>
                <button className='clipboard-btn' onClick={copyToClipboard}>
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
            <CheckBoxHtml CheckBoxProps = {props}/>
        )}
        </div>
    </>
    );
};
export default CheckBoxComponent;