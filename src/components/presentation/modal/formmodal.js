import React from "react";
import "./modal.scss";
import useModal from "../../sub-components/use-modal/use-modal";
import FormPresentation from "../formpresentation";
import { useNavigate } from "react-router-dom";
const FormModal =()=>{
    const { open: openInputText, close: closeInputText, ModalWrapper: ModalWrapperInputText } = useModal();
    const { open: openInputTextDetail, close: closeInputTextDetail, ModalWrapper: ModalWrapperInputTextDetail } = useModal();
    
    const componentList =[
        "inputtext",
        "TextArea",
        "Checkbox",
        "RadioButton",
        "Select",
        "DatePicker",
        "FileUpload",
        "Range"
    ];
return(
    <>
    <div className="modal-components">
    <ModalWrapperInputText>
        {/* <HeaderDetail close={closeHeaderDetail} /> */}
	</ModalWrapperInputText>
    

    {componentList.map((data, index) => {
        return (
          <div key={index} class="modal_section">
           <div className="modal-header">
            <h1>{data}</h1>
            </div>
            <div className="modal-content">
            
            <p>This components help to create and customised the {data}.</p>
            {data === "inputtext" ? (
              <div className="modal-button_section">
                <button title="Details button for header" type="button" class="buttons" onClick={openInputTextDetail}>
                  Details
                </button>
                <button title="Create button for header" type="button" class="buttons" onClick={openInputText}>
                  Create
                </button>
              </div>
            ) : (
              <div className="modal-button_section">
                <button  type="button" aria-label="Details button for navbar component" class="buttons" onClick={openInputTextDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for navbar component" class="buttons" onClick={openInputTextDetail}>
                  Create
                </button>
              </div>
            )}
            </div>
            
          </div>
        );
    })
    }
    </div>
     
    </>
   
)
  
};
export default FormModal;