import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import EditTooltipModal from "./edit-tooltip";
import useModal from "../../sub-components/use-modal/use-modal";
//import CustomTooltip from "./CustomTooltip";
import TooltipHtml from "./tooltip-html";
import Tooltip from "./tooltip-main";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './tooltip.scss';

export const CustomStyleTooltip = styled.div`@import "../../theme/breakpoints.scss";

.Tooltip_Button {
    position: relative;
    background-color: #0070AD;
    color: white;
    width: 200px;
    text-align: center;
    line-height: 44px;
    border-radius: 3px;
    cursor: pointer;
    margin: 70px auto;
}
  
.Tooltip_Button .tooltiptext-top {
    visibility: hidden;
    width: 200px;
     
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 115%;
    left: 30%;
    margin-left: -60px;
}
  
.Tooltip_Button .tooltiptext-top::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}

.Tooltip_Button .tooltiptext-bottom {
    visibility: hidden;
    width: 200px;
     
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 115%;
    left: 30%;
    margin-left: -60px;
}

.Tooltip_Button .tooltiptext-bottom::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
}

.Tooltip_Button .tooltiptext-right {
    visibility: hidden;
    width: 200px;
     
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: -5px;
    left: 103%;
}

.Tooltip_Button .tooltiptext-right::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent black transparent transparent;
}

.Tooltip_Button .tooltiptext-left {
    visibility: hidden;
    width: 200px;
     
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: -5px;
    right: 103%;
}

.Tooltip_Button .tooltiptext-left::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent black;
}

.Tooltip_Button .tooltiptext-topleft {
    visibility: hidden;
    width: 200px;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 115%;
    left: -30%;
    margin-left: -60px;
}
  
.Tooltip_Button .tooltiptext-topleft::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 80%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}

.Tooltip_Button .tooltiptext-topright {
    visibility: hidden;
    width: 200px;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 115%;
    left: 90%;
    margin-left: -60px;
}
  
.Tooltip_Button .tooltiptext-topright::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 20%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}

.Tooltip_Button .tooltiptext-bottomright {
    visibility: hidden;
    width: 200px;
     
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 115%;
    left: 90%;
    margin-left: -60px;
}

.Tooltip_Button .tooltiptext-bottomright::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 20%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
}

.Tooltip_Button .tooltiptext-bottomleft {
    visibility: hidden;
    width: 200px;
     
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 115%;
    left: -30%;
    margin-left: -60px;
}

.Tooltip_Button .tooltiptext-bottomleft::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 80%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
}
  
.Tooltip_Button:hover .tooltiptext-top, .Tooltip_Button:hover .tooltiptext-bottom, 
.Tooltip_Button:hover .tooltiptext-right, .Tooltip_Button:hover .tooltiptext-left,
.Tooltip_Button:hover .tooltiptext-topleft, .Tooltip_Button:hover .tooltiptext-topright,
.Tooltip_Button:hover .tooltiptext-bottomleft, .Tooltip_Button:hover .tooltiptext-bottomright{
    visibility: visible;
}

.dark {
    background-color: black;
    color: white;
}

.normal {
    background-color: white;
    color: black;
    border: 1px solid black;
}

.blue {
    background-color: #0070AD;
    color: white;
}

.purple {
    background-color: #2b0a3d;
    color: white;
}

`;

//console.log("Css aayi?", CustomStyleTooltip.componentStyle.rules[0]);

const TooltipComponent = ( ) => {
  const location = useLocation();
  const { open: openEditTooltip, close: closeEditTooltip, ModalWrapper: ModalWrapperEditTooltip } = useModal();
  const props = location.state.inputs;

  const [activeTab, setActiveTab] = useState(0);
  console.log(props, "props in tooltip");
  // const themeClass = {props.themeValue?}
  return (
    <>
    <ModalWrapperEditTooltip >
        <EditTooltipModal close={closeEditTooltip} data={props} />
	</ModalWrapperEditTooltip >
    <div className="header-output">
        <div className="component-header">
            <div className="header-left">
                <h1>TooltTip </h1> <span> Component</span> 
            </div>
            <div className="header-right">
                <div className="button-section">
                    <Link to="/" className="link-button" aria-label="back to various component homepage">
                        Back
                    </Link>
                    <button class="buttons" aria-label="Edit values for Tooltip Component" onClick={openEditTooltip} >
                        Edit
                    </button>
                </div>
            </div>
        </div>
        <Tooltip TooltipProps = {props} />
        {/* <div className= {`button-content ${props?.themeValue == "Dark"?"Dark":props?.themeValue == "cg1"?"cg1":props?.themeValue == "cg2"?"Cg2":props?.themeValue == "Normal"?"Normal":"" }`}>
            <CustomTooltip {...props}/>
        </div> */}

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
            {CustomStyleTooltip.componentStyle.rules[0]}
        </SyntaxHighlighter>
    ) : (
        <TooltipHtml TooltipProps ={props} />
    )}
    </div>
      
    </>
  );
};
export default TooltipComponent;
