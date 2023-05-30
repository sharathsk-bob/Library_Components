import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import useModal from "../../use-modal/use-modal";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import TextArea from "./textarea-main";
import TextAreaHtml from "./textarea-html";
import  EditTextAreaModal from "../textarea/edit-textarea";

export const CustomStyleTextArea = styled.div`

`;

const TextAreaComponent = ( ) => {

  const location = useLocation();
  const { open: openEditInput, close: closeEditInput, ModalWrapper: ModalWrapperEditInput } = useModal();
  const props = location.state.inputs;
  console.log(props, "valuee mains props");

  const [activeTab, setActiveTab] = useState(0);
  const formattedCSS = CustomStyleTextArea.componentStyle.rules[0];

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
      <ModalWrapperEditInput>
        <EditTextAreaModal close={closeEditInput} data={props} />
      </ModalWrapperEditInput>
      <div className= {`header-output ${props?.themeValue == "Normal"? "normal-header":""}`}>
        <div className="component-header">
          <div className="header-left">
            <h1>Text Area</h1><span> Component</span> 
          </div>
          <div className="header-right"> 
            <div className="button-section">
              <Link to="/formcomponents" className="link-button">
                Back
              </Link>
              <button class="buttons" onClick={openEditInput}  >
                Edit
              </button>
            </div>
          </div>
        </div>
        <TextArea TextAreaProps={props}/>
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
        <TextAreaHtml TextAreaProps = {props}/>
      )}
      </div>
      </>
    );
  };
  export default TextAreaComponent;