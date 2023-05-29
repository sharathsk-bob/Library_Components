import React, { useState } from "react";
import { useLocation,  Link } from "react-router-dom";
import EditDatePickerModal from "./edit-datepicker";
import useModal from "../../../sub-components/use-modal/use-modal";
import DatePickerHtml from "./datepicker-html";
import DateSetter from "./datepicker-main";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import "../header/header.scss";

export const CustomStyleDatePicker = styled.div`
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
`;

const DatePickerComponent = ( ) => {
  const location = useLocation();
  const { open: openEditDatePicker, close: closeEditDatePicker, ModalWrapper: ModalWrapperEditDatePicker } = useModal();
  const props = location.state.inputs;

  const [activeTab, setActiveTab] = useState(0);
  // const themeClass = {props.themeValue?}

  const formattedCSS = CustomStyleDatePicker.componentStyle.rules[0];

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
    <ModalWrapperEditDatePicker >
        <EditDatePickerModal close={closeEditDatePicker} data={props} />
	</ModalWrapperEditDatePicker >
    <div className="header-output">
        <div className="component-header">
            <div className="header-left">
                <h1>Date Picker </h1> <span> Component</span> 
            </div>
            <div className="header-right">
                <div className="button-section">
                    <Link to="/formcomponents" className="link-button" aria-label="back to form component homepage">
                        Back
                    </Link>
                    <button class="buttons" aria-label="Edit values for Date Picker Component" onClick={openEditDatePicker} >
                        Edit
                    </button>
                </div>
            </div>
        </div>
        <DateSetter DatePickerProps = {props} />
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
        <DatePickerHtml ButtonProps = {props} />
    )}
    </div>
      
    </>
  );
};
export default DatePickerComponent;
