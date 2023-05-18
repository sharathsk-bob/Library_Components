import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import EditTooltipModal from "./edit-tooltip";
import useModal from "../../sub-components/use-modal/use-modal";
//import CustomTooltip from "./CustomTooltip";
import TooltipHtml from "./tooltip-html";
import Tooltip from "./tooltip-main";
import './tooltip.scss';

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
            TAB2
        </button>
    </div>

    <div className="card-content">
    {activeTab === 0 ? (
        ("")
    ) : (
        <TooltipHtml TooltipProps ={props} />
    )}
    </div>
      
    </>
  );
};
export default TooltipComponent;
