import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useModal from "../../use-modal/use-modal";
import EditSwitchForm from "./edit-switch";
import "./switch-control.scss";
import SwitchHtml from "./switch-html";
import SwitchMain from "./switch-main";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";

export const CustomStyleSwitch = styled.div`

input:checked + .slider {
  background-color: #2196F3;
}
input:checked + .light{
  background-color:#f1f4f8 !important;    
}
input:checked + .dark{
  background-color:black !important;
}
input:checked + .cg1-blue{
  background-color: var(--color-capgemini-blue) !important;
}
input:checked + .cg2-purple{
  background-color:#2b0a3d !important;
}
.small {
  transform: scale(0.8);
}
.small-label{
  margin-left: 0px;
}
.medium-label{
  margin-left: 11px;
}

.large-label{
  margin-left:22px;
}

.medium {
  transform: scale(1);
}

.large {
  transform: scale(1.5);
}
// .switch-div{
//     text-align: center;
//     margin: 90px;
// }
// .switch-label{
//     margin-left: 22px;
// }
.switch {
outline: none;
}

.switch:focus {

box-shadow: 0 0 4px 2px black;
}

.switch-label {
outline: none;
}

.switch-label:focus {
box-shadow: 0 0 4px 2px black;
}

.switch-div {
display: flex;
justify-content: center;
align-items: center;
margin: 90px;
}

.centered-container {
display: flex;
align-items: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`;
function SwitchControl() {
  const location = useLocation();
  const props = location.state.switchProps;
  const [activeTab, setActiveTab] = useState(1);
  const {
    open: openEditSwitch,
    close: closeEditSwitch,
    ModalWrapper: ModalWrapperEditSwitch,
  } = useModal();
  const formattedCSS = CustomStyleSwitch.componentStyle.rules[0];
  return (
    <>
       <ModalWrapperEditSwitch>
      <EditSwitchForm close={closeEditSwitch} data={props}/>
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
      <SwitchMain props={props}/>
      <div className="card-tabs">
  <button
    className={activeTab === 1 ? "active" : ""}
    aria-label="HTML Page of Switch Control Component"
    onClick={() => setActiveTab(1)}
  >
    HTML
  </button>
  <button
    className={activeTab === 0 ? "active" : ""}
    aria-label="CSS Page of Switch Control Component"
    onClick={() => setActiveTab(0)}
  >
    CSS
  </button>
</div>
<div className="card-content">
  {activeTab === 0 ? (
      <SyntaxHighlighter language="css" style={coy}>
    {formattedCSS}
    </SyntaxHighlighter>
  ) : (
    <SwitchHtml props={props} />
  )}
</div>
    </>
  );
}

export default SwitchControl;
