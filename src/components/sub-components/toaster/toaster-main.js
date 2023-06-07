import React from 'react';
import { Toast } from '@coreui/coreui';
import "./toaster.scss";

function ToasterMain(props) {
  const openToaster=()=>{
    const toastLiveExample = document.getElementById('liveToast');
    const toast = new Toast(toastLiveExample);
    toast.show();
}
  return (
    <>
    <div className='toaster-button'>
      <button type="button" class={`toaster-btn`} id="liveToastBtn" onClick={openToaster}>{props.buttonText}</button>
    </div>
    <div class={`toaster-main position-fixed ${props?.toastdirection == "Top"?"top-0":"bottom-0"} end-0 p-3 `} >
      <div id="liveToast" class={`toast hide ${props?.toasterType=="success"?"success-toaster":props.toasterType=="warning"?"warning-toaster":props.toasterType=="info"?"info-toaster":props.toasterType=="error"?"error-toaster":"" }`} role="alert" aria-live="assertive" aria-atomic="true">
        <div class={`toast-header `}>
          {/* <img src="..." class="rounded me-2" alt="..."/> */}
          {props.toasterType=="success"?<i class="fa fa-check fa-lg" aria-hidden="true"></i>:props.toasterType=="warning"?<i class="fa fa-warning fa-lg" aria-hidden="true"></i>:props.toasterType=="info"?<i class="fa fa-info fa-lg" aria-hidden="true"></i>:props.toasterType=="error"?<i class="fa fa-times fa-lg" aria-hidden="true"></i>:("")}
          <div class={`toast-text`}>
            <strong class="me-auto">{props.title}</strong>
            <strong class="me-auto">{props.message}</strong>
          </div>
          {/* <small>11 mins ago</small> */}
          <button type="button" class="ms-auto toast-close" data-bs-dismiss="toast" aria-label="Close">
            <i class="toaster-close fa fa-times fa-lg" aria-hidden="true"></i>
          </button>
        </div>
        {/* <div class="toast-body">
        {props.message}
        </div> */}
      </div>
    </div>
    </>
  )
}

export default ToasterMain;