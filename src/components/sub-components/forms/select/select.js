import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useModal from '../../use-modal/use-modal';
import { Link } from 'react-router-dom';
import EditSelect from './edit-select';
import SelectHtml from './select-html';
import SelectMain from './select-main';
import './select.scss';

function SelectComponent() {
  const location = useLocation();
  const select = location.state.selectProps;
  const [activeTab, setActiveTab] = useState(1);
  const { open: openEditSelect, close: closeEditSelect, ModalWrapper: ModalWrapperEditSelect } = useModal();
  return (
    <>
    <ModalWrapperEditSelect>
      <EditSelect close={closeEditSelect} data={select}/>
    </ModalWrapperEditSelect>
    <div className="component-toaster">
      <div className="toaster-left">
        <h1>Select</h1>
        <span> Component</span>
      </div>
      <div className="toaster-right">
        <div className="button-section">
          {/* <div  className="buttons"> */}
          <Link
            to="/formcomponents"
            aria-label="back to form component homepage"
            // state={headerData}
            className="link-button"
          >
            Back
          </Link>
          {/* </div> */}
          {/* <button className="backToHome" onClick={()=>{history("/")}}>Back</button> */}
          <button class="buttons" aria-label="Edit values for Select Component" onClick={openEditSelect}>Edit</button>
        </div>
      </div>
    </div>
    <SelectMain select={select}/>

    <div className="card-tabs">
      <button
        className={activeTab === 1 ? "active" : ""}
        aria-label="HTML Page of Select Component"
        onClick={() => setActiveTab(1)}
      >
        HTML
      </button>
      <button
        className={activeTab === 0 ? "active" : ""}
        aria-label="CSS Page of Select Component"
        onClick={() => setActiveTab(0)}
      >
        CSS
      </button>
    </div>
    <div className="card-content">
      {activeTab === 0 ? (
        <>
        {/* <div className='clipboard-div'>
          <button className='clipboard-btn' aria-label="copy to clipboard button" onClick={copyToClipboard}>
              <i className={`fa ${copied ? 'fa-check' : 'fa-copy'}`} >
                  {copied ? ' Copied!' : ' Copy Code'}
              </i>
          </button>
        </div> */}
        {/* <SyntaxHighlighter language="css" style={coy}>
        {formattedCSS}
        </SyntaxHighlighter> */}
        </>
      ) : (
        <SelectHtml />
      )}
    </div>
    </>
  )
}
export default SelectComponent;