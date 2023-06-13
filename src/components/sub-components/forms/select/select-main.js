import React from 'react';
import Multiselect from "multiselect-react-dropdown";

import './select.scss';
function SelectMain(props) {
    const { select }=props;
    console.log(props, "propsss");
  return (
    <>
     {select.inputType=="multiselect"?
   <> 
   <div className="slect-output">
   <label className='select-label'>{select.label}:</label>
   <div class={`multi-select form-select-lg
   ${select.theme == "select-dark"?"dp-dark":select.theme == "select-blue"?"dp-blue":select.theme == "select-purple"?"dp-purple":select.theme == "select-light"?"dp-normal":"" }
   ${select?.boxSize=="100%"?"select-fullwidth":select?.boxSize=="75%"?"select-threefourthwidth":select?.boxSize=="50%"?"select-halfwidth":select?.boxSize=="25%"?"select-quaterwidth":""}`} aria-label="select Component" >
         <Multiselect
  isObject={false}
  onKeyPressFn={function noRefCheck(){}}
  onRemove={function noRefCheck(){}}
 
//  onSelect={}
  options={select.optionTexts}


 
/>
</div>
    </div>
    </>:
    <>
    <div className="slect-output">
    <label className='select-label'>{select.label}:</label>
        <select class={`form-select  form-select-lg 
         ${select.theme == "select-dark"?"dp-dark":select.theme == "select-blue"?"dp-blue":select.theme == "select-purple"?"dp-purple":select.theme == "select-light"?"dp-normal":"" }
         ${select?.boxSize=="100%"?"select-fullwidth":select?.boxSize=="75%"?"select-threefourthwidth":select?.boxSize=="50%"?"select-halfwidth":select?.boxSize=="25%"?"select-quaterwidth":""}`} aria-label="select Component" >
        <option className='select-options' selected>Open this select menu</option>
          {select.optionTexts.map((x)=>{return(<option className='select-options' value={x}>{x}</option>)})}
          {/* <option value="dark">Dark</option> */}
        </select>
        </div>
        </> }
    </>
  )
}

export default SelectMain;