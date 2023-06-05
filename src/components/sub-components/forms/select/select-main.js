import React from 'react';
import Multiselect from "multiselect-react-dropdown";

function SelectMain(props) {
    const { select }=props;
  return (
    <>
     {select.inputType=="multiselect"?
   <> 
   <label>{select.label}:</label>
   <div>
         <Multiselect
  isObject={false}
  onKeyPressFn={function noRefCheck(){}}
  onRemove={function noRefCheck(){}}
 
//  onSelect={}
  options={select.optionTexts}


 
/>
    </div>
    </>:
    <>
    <label>{select.label}:</label>
        <select class={`form-select  ${select?.boxSize=="100%"?"select-fullwidth":select?.boxSize=="75%"?"select-threefourthwidth":select?.boxSize=="50%"?"select-halfwidth":select?.boxSize=="25%"?"select-quaterwidth":""}`} aria-label="select Component" >
        <option selected>Open this select menu</option>
          {select.optionTexts.map((x)=>{return(<option value={x}>{x}</option>)})}
          {/* <option value="dark">Dark</option> */}
        </select>
        </> }
    </>
  )
}

export default SelectMain;