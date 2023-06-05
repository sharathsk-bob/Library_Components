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
    .DatePicker-Content {
        font-size:16px;
        width: 50%;
        margin: 0 auto;
        margin-bottom: 290px;
        margin-top: 32px;
        text-align: center;

        @media (max-width: 768px) {
            font-size:12px;
        }
    }

    .dp-normal {
        background-color: rgb(241, 244, 248)!important;
        border-style: solid;
        border-width: medium; 
        border-color: var(--color-white)  !important;
    }

    .dp-dark {
        background-color: rgb(241, 244, 248)!important;
        border-style: solid;
        border-width: medium; 
        border-color: var(--color-black) !important;
    }

    .dp-blue {
        background-color: rgb(241, 244, 248)!important;
        border-style: solid;
        border-width: medium; 
        border-color: var(--color-capgemini-blue) !important;
    }

    .dp-purple {
        background-color: rgb(241, 244, 248)!important;
        border-style: solid;
        border-width: medium; 
        border-color: var(--color-purple-wbh) !important;
    }

    .dp-small {
        padding: 8px 8px;
    }

    .dp-medium {
        padding: 16px 8px;
    }

    .dp-small {
        padding: 24px 8px;
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
        <button className={activeTab === 1 ? "active" : ""} aria-label="HTML Page of DatePicker Component" onClick={() => setActiveTab(1)}>
            HTML
        </button>
        <button className={activeTab === 0 ? "active" : ""} aria-label="CSS Page of DatePicker Component" onClick={() => setActiveTab(0)}>
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
        <DatePickerHtml DatePickerProps = {props} />
    )}
    </div>
      
    </>
  );
};
export default DatePickerComponent;
