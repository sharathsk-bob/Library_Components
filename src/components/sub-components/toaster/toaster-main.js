import React from 'react';
import { Toast } from '@coreui/coreui';
import "./toaster.scss";
import closeIcon from "../../asset/images/cross-white.png";

function ToasterMain(props) {
  const openToaster=()=>{
    const toastLiveExample = document.getElementById('liveToast');
    const toast = new Toast(toastLiveExample);
    toast.show();
}
  return (
    <>
    <div className='toaster-button'>
          <button type="button" class="btn btn-primary" id="liveToastBtn" onClick={openToaster}>{props.buttonText}</button>
          </div>
    

<div class={`toaster-main position-fixed ${props?.toastdirection == "Top"?"top-0":"bottom-0"} end-0 p-3 `} >
  <div id="liveToast" class={`toast hide ${props?.toasterType=="success"?"success":props.toasterType=="warning"?"warning":props.toasterType=="info"?"info":props.toasterType=="error"?"error":"" } ${props?.toastTheme == "Dark"?"Dark":props?.toastTheme == "cg1"?"cg1":props?.toastTheme == "cg2"?"cg2":props?.toastTheme == "Normal"?"Normal":"" }`} role="alert" aria-live="assertive" aria-atomic="true">
    <div class={`toast-header `}>
      {/* <img src="..." class="rounded me-2" alt="..."/> */}
      {props.toasterType=="success"?<i class="fa fa-check fa-lg" aria-hidden="true"></i>:props.toasterType=="warning"?<i class="fa fa-warning fa-lg" aria-hidden="true"></i>:props.toasterType=="info"?<i class="fa fa-info-circle fa-lg" aria-hidden="true"></i>:props.toasterType=="error"?<i class="fa fa-times-circle fa-lg" aria-hidden="true"></i>:("")}
      <strong class="me-auto">{props.message}</strong>
      {/* <small>11 mins ago</small> */}
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">
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