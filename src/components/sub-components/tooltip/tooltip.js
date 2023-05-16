import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import EditTooltipModal from "./edit-tooltip";
import useModal from "../../sub-components/use-modal/use-modal";
import CustomTooltip from "./CustomTooltip";

// import { CustomTooltip } from "./CustomTooltip";

const TooltipComponent = ( ) => {
  const location = useLocation();
  const { open: openEditTooltip, close: closeEditTooltip, ModalWrapper: ModalWrapperEditTooltip } = useModal();
  const props = location.state.inputs;

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
                <Link to="/" className="btn btn-primary btn-lg">
                    <button class="buttons" aria-label="back to various component homepage">
                        Back
                    </button>
                </Link>
                    <button class="buttons" aria-label="Edit values for Tooltip Component" onClick={openEditTooltip} >
                        Edit
                    </button>
                </div>
            </div>
        </div>
        <div className= {`button-content ${props?.themeValue == "Dark"?"Dark":props?.themeValue == "cg1"?"cg1":props?.themeValue == "cg2"?"Cg2":props?.themeValue == "Normal"?"Normal":"" }`}>
            {/* {CustomTooltip()} */}
            <CustomTooltip{...props}/>
        </div>
    </div>
      
    </>
  );
};
export default TooltipComponent;
