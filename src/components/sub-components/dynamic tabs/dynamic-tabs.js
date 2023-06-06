import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useModal from "../use-modal/use-modal";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";
import './dynamic-tabs.scss';

function DynamicTabs() {
    const location = useLocation();
  const props = location.state.tabsProps;
  const [activeTab, setActiveTab] = useState(1);
    const {
        open: openEditSwitch,
        close: closeEditSwitch,
        ModalWrapper: ModalWrapperEditSwitch,
      } = useModal();
  return (
    <>
     <ModalWrapperEditSwitch>
      {/* <EditSwitchForm close={closeEditSwitch} data={props}/> */}
    </ModalWrapperEditSwitch>
      <div className="component-toaster">
        <div className="toaster-left">
          <h1>Switch Control</h1>
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
            <button class="buttons" onClick={openEditSwitch}>
              Edit
            </button>
          </div>
        </div>
      </div>
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" >All Content</button>
  </li>
  <li className="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" >Mental-Well-Being</button>
  </li>
  <li className="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" >Physical-Well-Being</button>
  </li>
  <li className="nav-item" role="presentation">
    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" >Financial-Well-Being</button>
  </li>
  <li className="nav-item" role="presentation">
    <button class="nav-link" id="pills-video-tab" data-bs-toggle="pill" data-bs-target="#pills-video" type="button" role="tab" aria-controls="pills-video" aria-selected="false" >Healthy Culture</button>
  </li>
  <li className="nav-item" role="presentation">
    <button class="nav-link" id="pills-emo-tab" data-bs-toggle="pill" data-bs-target="#pills-emo" type="button" role="tab" aria-controls="pills-emo" aria-selected="false" >Emotional Mastery</button>
  </li>
  <li className="nav-item" role="presentation">
    <button class="nav-link" id="pills-playing-tab" data-bs-toggle="pill" data-bs-target="#pills-playing" type="button" role="tab" aria-controls="pills-playing" aria-selected="false" >Podcast</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">

  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
  <div class="row row-cols-1 row-cols-md-3 g-4">
 
    </div>
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
  <div class="row row-cols-1 row-cols-md-3 g-4">
   
    </div>
    
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
  <div class="row row-cols-1 row-cols-md-3 g-4">
 

</div>

  </div>
  <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
  <div class="row row-cols-1 row-cols-md-3 g-4">
  

</div>


  </div>
  <div className="tab-pane fade" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab" tabindex="0">
  <div class="row row-cols-1 row-cols-md-3 g-4">
 
</div>


  </div>
  <div className="tab-pane fade" id="pills-emo" role="tabpanel" aria-labelledby="pills-emo-tab" tabindex="0">
  <div class="row row-cols-1 row-cols-md-3 g-4">
  
</div>



  </div>
  <div className="tab-pane fade" id="pills-playing" role="tabpanel" aria-labelledby="pills-playing-tab" tabindex="0">
  <div class="row row-cols-1 row-cols-md-3 g-4">

</div>



  </div>
</div>
    </>
  )
}

export default DynamicTabs;