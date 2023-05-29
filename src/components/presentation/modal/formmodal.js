import React from "react";
import "./modal.scss";
import useModal from "../../sub-components/use-modal/use-modal";
import FormPresentation from "../formpresentation";
import { useNavigate } from "react-router-dom";
import InputModal from "../../sub-components/forms/inputtext/input-modal";
import DatePickerDetail from "../../sub-components/forms/datepicker/datepicker-detail";
import DatePickerForm from "../../sub-components/forms/datepicker/datepicker-form";

const FormModal =()=>{
    const { open: openInputText, close: closeInputText, ModalWrapper: ModalWrapperInputText } = useModal();
    const { open: openInputTextDetail, close: closeInputTextDetail, ModalWrapper: ModalWrapperInputTextDetail } = useModal();
    const { open: openDatePickerDetail, close: closeDatePickerDetail, ModalWrapper: ModalWrapperDatePickerDetail } = useModal();
    const { open: openDatePickerForm, close: closeDatePickerForm, ModalWrapper: ModalWrapperDatePicker } = useModal();

    const componentList =[
        "Input Text",
        "Text Area",
        "Check Box",
        "Radio Button",
        "Select",
        "Date Picker",
        "File Upload",
        "Switch Control",
        "Progress Bar",
        "Range"
    ];
    
return(
    <>
    <div className="modal-components">
    <ModalWrapperInputText>
        <InputModal close={closeInputText} />
	  </ModalWrapperInputText>

      <ModalWrapperDatePickerDetail>
        <DatePickerDetail close={closeDatePickerDetail} />
      </ModalWrapperDatePickerDetail>
      <ModalWrapperDatePicker>
        <DatePickerForm close={closeDatePickerForm} />
      </ModalWrapperDatePicker>
    

    {componentList.map((data, index) => {
        return (
          <div key={index} class="modal_section">
           <div className="modal-header">
            <h1>{data}</h1>
            </div>
            <div className="modal-content">
            
            <p>This components help to create and customised the {data}.</p>
            {data === "Input Text" ? (
              <div className="modal-button_section">
                <button title="Details button for header" type="button" class="buttons" onClick={openInputTextDetail}>
                  Details
                </button>
                <button title="Create button for header" type="button" class="buttons" onClick={openInputText}>
                  Create
                </button>
              </div>
            ) : data === "Date Picker" ? (
              <div className="modal-button_section">
                <button title="Details button for date picker" type="button" class="buttons" onClick={openDatePickerDetail}>
                  Details
                </button>
                <button title="Create button for date picker" type="button" class="buttons" onClick={openDatePickerForm}>
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