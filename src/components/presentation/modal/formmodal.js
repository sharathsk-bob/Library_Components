import React from "react";
import useModal from "../../sub-components/use-modal/use-modal";
import InputModal from "../../sub-components/forms/inputtext/input-modal";
import InputTextDetail from "../../sub-components/forms/inputtext/inputtext-detail";
import DatePickerDetail from "../../sub-components/forms/datepicker/datepicker-detail";
import DatePickerForm from "../../sub-components/forms/datepicker/datepicker-form";
import TextAreaDetail from "../../sub-components/forms/textarea/textarea-detail";
import TextAreaForm from "../../sub-components/forms/textarea/textarea-form";
import CheckBoxDetail from "../../sub-components/forms/checkbox/checkbox-detail";
import CheckBoxForm from "../../sub-components/forms/checkbox/checkbox-form";
import ProgressForm from "../../sub-components/forms/progress-bar/progress-form";
import ProgressDetail from "../../sub-components/forms/progress-bar/progress-detail";
import SwitchForm from "../../sub-components/forms/switch-control/switch-form";
import SwitchDetail from "../../sub-components/forms/switch-control/switch-detail";
import RangeDetail from "../../sub-components/forms/range/range-detail";
import RangeForm from "../../sub-components/forms/range/range-form";
import FileSelectDetail from "../../sub-components/forms/file-select/fileselect-detail";
import SelectModal from "../../sub-components/forms/file-select/file-select-modal";
import "./modal.scss";

const FormModal =()=>{
    const { open: openDatePickerDetail, close: closeDatePickerDetail, ModalWrapper: ModalWrapperDatePickerDetail } = useModal();
    const { open: openDatePickerForm, close: closeDatePickerForm, ModalWrapper: ModalWrapperDatePicker } = useModal();
    const { open: openTextAreaDetail, close: closeTextAreaDetail, ModalWrapper: ModalWrapperTextAreaDetail } = useModal();
    const { open: openTextAreaForm, close: closeTextAreaForm, ModalWrapper: ModalWrapperTextArea } = useModal();
    const { open: openCheckBoxDetail, close: closeCheckBoxDetail, ModalWrapper: ModalWrapperCheckBoxDetail } = useModal();
    const { open: openCheckBoxForm, close: closeCheckBoxForm, ModalWrapper: ModalWrapperCheckBox } = useModal();
    const { open: openInputTextDetail, close: closeInputTextDetail, ModalWrapper: ModalWrapperInputTextDetail } = useModal();
    const { open: openInputText, close: closeInputText, ModalWrapper: ModalWrapperInputText } = useModal();
    const { open: openProgressBar, close: closeProgressBar, ModalWrapper: ModalWrapperProgressBar } = useModal();
    const { open: openProgressBarDetail, close: closeProgressBarDetail, ModalWrapper: ModalWrapperProgressBarDetail } = useModal();
    const { open: openSwitchControl, close: closeSwitchControl, ModalWrapper: ModalWrapperSwitchControl } = useModal();
    const { open: openSwitchControlDetail, close: closeSwitchControlDetail, ModalWrapper: ModalWrapperSwitchControlDetail } = useModal();
    const { open: openRange, close: closeRange, ModalWrapper: ModalWrapperRange } = useModal();
    const { open: openRangeDetail, close: closeRangeDetail, ModalWrapper: ModalWrapperRangeDetail } = useModal();
    const { open: openFileUploadDetail, close: closeFileUploadDetail, ModalWrapper: ModalWrapperFileUploadDetail } = useModal();
    const { open: openSelect, close: closeSlect, ModalWrapper: ModalWrapperSelect } = useModal();
    
    const componentList =[
      "Input Text",
      "Text Area",
      "Check Box / Radio Button",
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
      <ModalWrapperInputTextDetail>
        <InputTextDetail close={closeInputTextDetail} />
      </ModalWrapperInputTextDetail>
      
      <ModalWrapperCheckBoxDetail>
        <CheckBoxDetail close={closeCheckBoxDetail} />
      </ModalWrapperCheckBoxDetail>
      <ModalWrapperCheckBox>
        <CheckBoxForm close={closeCheckBoxForm} />
      </ModalWrapperCheckBox>

      <ModalWrapperTextAreaDetail>
        <TextAreaDetail close={closeTextAreaDetail} />
      </ModalWrapperTextAreaDetail>
      <ModalWrapperTextArea>
        <TextAreaForm close={closeTextAreaForm} />
      </ModalWrapperTextArea>

      <ModalWrapperDatePickerDetail>
        <DatePickerDetail close={closeDatePickerDetail} />
      </ModalWrapperDatePickerDetail>
      <ModalWrapperDatePicker>
        <DatePickerForm close={closeDatePickerForm} />
      </ModalWrapperDatePicker>
      
      <ModalWrapperProgressBarDetail>
        <ProgressDetail close={closeProgressBarDetail}/>
      </ModalWrapperProgressBarDetail>
      <ModalWrapperProgressBar>
        <ProgressForm close={closeProgressBar}/>
      </ModalWrapperProgressBar>

      <ModalWrapperSwitchControl>
        <SwitchForm close={closeSwitchControl}/>
      </ModalWrapperSwitchControl>
      <ModalWrapperSwitchControlDetail>
        <SwitchDetail close={closeSwitchControlDetail}/>
      </ModalWrapperSwitchControlDetail>

      <ModalWrapperFileUploadDetail>
        <FileSelectDetail close={closeFileUploadDetail} />
      </ModalWrapperFileUploadDetail>
      <ModalWrapperSelect>
        <SelectModal close={closeSlect}/>
      </ModalWrapperSelect>
      <ModalWrapperRangeDetail>
        <RangeDetail close={closeRangeDetail} />
      </ModalWrapperRangeDetail>
      <ModalWrapperRange>
        <RangeForm close={closeRange}/>
      </ModalWrapperRange>

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
                <button title="Details button for input text component" type="button" class="buttons" onClick={openInputTextDetail}>
                  Details
                </button>
                <button title="Create button for input text component" type="button" class="buttons" onClick={openInputText}>
                  Create
                </button>
              </div>
            ) : data === "Date Picker" ? (
              <div className="modal-button_section">
                <button title="Details button for date picker component" type="button" class="buttons" onClick={openDatePickerDetail}>
                  Details
                </button>
                <button title="Create button for date picker component" type="button" class="buttons" onClick={openDatePickerForm}>
                  Create
                </button>
              </div>
            ) : data === "Text Area" ? (
              <div className="modal-button_section">
                <button title="Details button for text area component" type="button" class="buttons" onClick={openTextAreaDetail}>
                  Details
                </button>
                <button title="Create button for text area component" type="button" class="buttons" onClick={openTextAreaForm}>
                  Create
                </button>
              </div>
            ) : data === "Check Box / Radio Button" ? (
              <div className="modal-button_section">
                <button title="Details button for check box and radio button component" type="button" class="buttons" onClick={openCheckBoxDetail}>
                  Details
                </button>
                <button title="Create button for check box and radio button component" type="button" class="buttons" onClick={openCheckBoxForm}>
                  Create
                </button>
              </div>
            ) : data === "Progress Bar" ? (
              <div className="modal-button_section">
                <button title="Details button for progress bar component" type="button" class="buttons" onClick={openProgressBarDetail}>
                  Details
                </button>
                <button title="Create button for progress bar component" type="button" class="buttons" onClick={openProgressBar}>
                  Create
                </button>
              </div>
            ) : data === "Switch Control" ? (
              <div className="modal-button_section">
                <button title="Details button for switch control component" type="button" class="buttons" onClick={openSwitchControlDetail}>
                  Details
                </button>
                <button title="Create button for switch control component" type="button" class="buttons" onClick={openSwitchControl}>
                  Create
                </button>
              </div>
            ) : data === "Range" ? (
              <div className="modal-button_section">
                <button title="Details button for range component" type="button" class="buttons" onClick={openRangeDetail}>
                  Details
                </button>
                <button title="Create button for range component" type="button" class="buttons" onClick={openRange}>
                  Create
                </button>
              </div>
            ) : data === "File Upload" ? (
              <div className="modal-button_section">
                <button title="Details button for file upload component" type="button" class="buttons" onClick={openFileUploadDetail}>
                  Details
                </button>
                <button title="Create button for file upload component" type="button" class="buttons" onClick={openSelect}>
                  Create
                </button>
              </div>
            ) : (
              <div className="modal-button_section">
                <button type="button" aria-label="Details button for component" class="buttons" onClick={openInputTextDetail}>
                  Details
                </button>
                <button type="button" aria-label="Create button for component" class="buttons" onClick={openInputTextDetail}>
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