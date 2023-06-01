import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import InputRange from 'react-input-range';
import { Range, getTrackBackground } from "react-range";
import RangeMain from './range-main';
import { Link } from 'react-router-dom';
import useModal from '../../use-modal/use-modal';
import RangeHtml from './range-html';
import EditRangeForm from './edit-range';
import './range.scss';

const RangeComponent = () => {
  const location = useLocation();
  const myrange = location.state.rangeProps;
  const [activeTab, setActiveTab] = useState(1);
  const { open: openEditRange, close: closeEditRange, ModalWrapper: ModalWrapperEditRange } = useModal();
  const [copied, setCopied] = useState(false);

  return (
    <>
    <ModalWrapperEditRange>
      <EditRangeForm close={closeEditRange} data={myrange}/>
    </ModalWrapperEditRange>
    <div className="component-toaster">
            <div className="toaster-left">
              <h1>Range</h1>
              <span> Component</span>
            </div>
            <div className="toaster-right">
              <div className="button-section">
                {/* <div  className="buttons"> */}
                <Link
                  to="/formcomponents"
                  // state={headerData}
                  className="link-button"
                >
                  Back
                </Link>
                {/* </div> */}

                {/* <button className="backToHome" onClick={()=>{history("/")}}>Back</button> */}
                <button class="buttons" onClick={openEditRange}>Edit</button>
              </div>
            </div>
          </div>
    <RangeMain myrange={myrange}/>
    <div className="card-tabs">
  <button
    className={activeTab === 1 ? "active" : ""}
    onClick={() => setActiveTab(1)}
  >
    HTML
  </button>
  <button
    className={activeTab === 0 ? "active" : ""}
    onClick={() => setActiveTab(0)}
  >
    CSS
  </button>
</div>
<div className="card-content">
  {activeTab === 0 ? (
    <>
    {/* <div className='clipboard-div'>
      <button className='clipboard-btn' onClick={copyToClipboard}>
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
    <RangeHtml myrange={myrange} />
  )}
</div>
    </>
    
  );

};

export default RangeComponent;
