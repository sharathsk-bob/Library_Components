import React, { useState } from "react";
import "./checkbox.scss";

function CheckBox(props) {

    const { CheckBoxProps } = props;
    console.log(CheckBoxProps, "valuessssssss");

    return (
        <div className="CheckBox-Content">
            <fieldset 
                className={`${CheckBoxProps?.Choice_Theme == "Dark"?"cb-dark":CheckBoxProps?.Choice_Theme == "cg1"?"cb-blue":CheckBoxProps?.Choice_Theme == "cg2"?"cb-purple":CheckBoxProps?.Choice_Theme == "Normal"?"cb-normal":"" }
                ${CheckBoxProps?.Choice_fieldsetWidth == "25"?"cb-w25":CheckBoxProps?.Choice_fieldsetWidth == "50"?"cb-w50":CheckBoxProps?.Choice_fieldsetWidth == "75"?"cb-w75":CheckBoxProps?.Choice_fieldsetWidth == "100"?"cb-w100":"" }
                ${CheckBoxProps?.Choice_Layout == "Vertical"?"disp-col":CheckBoxProps?.Choice_Layout == "Horizontal"?"disp-row":"" }`}>
                <legend><span class="asterik" aria-label="Asterik-Required">*</span> {`${CheckBoxProps.boxLabel}`}</legend>
                { CheckBoxProps.numSelects == 1 ? (
                    <div class={`block-element`}>
                        <label className="label-container" for={`${CheckBoxProps.selectorLabel1}`}>{`${CheckBoxProps.selectorLabel1}`}
                        {/* id name aur value SelectionType*/}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        aria-label={`${CheckBoxProps.selectorLabel1}`} name="common" id={`${CheckBoxProps.selectorLabel1}`} value={`${CheckBoxProps.selectorLabel1}`}/>
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label> 
                    </div>
                ) : CheckBoxProps.numSelects == 2 ? ( 
                    <>
                    <div class={`block-element`}>
                        <label className="label-container" for={`${CheckBoxProps.selectorLabel1}`}>{`${CheckBoxProps.selectorLabel1}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        aria-label={`${CheckBoxProps.selectorLabel1}`} name="common" id={`${CheckBoxProps.selectorLabel1}`} value={`${CheckBoxProps.selectorLabel1}`} />
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label> 
                    </div>
                    <div class={`block-element`}>
                        <label className="label-container" for={`${CheckBoxProps.selectorLabel2}`}>{`${CheckBoxProps.selectorLabel2}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`} 
                        aria-label={`${CheckBoxProps.selectorLabel2}`} name="common" id={`${CheckBoxProps.selectorLabel2}`} value={`${CheckBoxProps.selectorLabel2}`} />
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label>
                    </div>
                    </>
                ) : CheckBoxProps.numSelects == 3 ? ( 
                    <>
                    <div class={`block-element`}>
                        <label className="label-container" for={`${CheckBoxProps.selectorLabel1}`}>{`${CheckBoxProps.selectorLabel1}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        aria-label={`${CheckBoxProps.selectorLabel1}`} name="common" id={`${CheckBoxProps.selectorLabel1}`} value={`${CheckBoxProps.selectorLabel1}`}/>
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label> 
                    </div>
                    <div class={`block-element`}>
                        <label className="label-container" for={`${CheckBoxProps.selectorLabel2}`}>{`${CheckBoxProps.selectorLabel2}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`} 
                        aria-label={`${CheckBoxProps.selectorLabel2}`} name="common" id={`${CheckBoxProps.selectorLabel2}`} value={`${CheckBoxProps.selectorLabel2}`}/>
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label>
                    </div>
                    <div class={`block-element`}>
                        <label className="label-container" for={`${CheckBoxProps.selectorLabel3}`}>{`${CheckBoxProps.selectorLabel3}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        aria-label={`${CheckBoxProps.selectorLabel3}`} name="common" id={`${CheckBoxProps.selectorLabel3}`} value={`${CheckBoxProps.selectorLabel3}`}/>
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label>
                    </div>
                    </>
                ) : CheckBoxProps.numSelects == 4 ? ( 
                    <>
                    <div class={`block-element`}>
                        <label className="label-container" for={`${CheckBoxProps.selectorLabel1}`}>{`${CheckBoxProps.selectorLabel1}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        aria-label={`${CheckBoxProps.selectorLabel1}`} name="common" id={`${CheckBoxProps.selectorLabel1}`} value={`${CheckBoxProps.selectorLabel1}`}/>
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label> 
                    </div>
                    <div class={`block-element`}>
                        <label className="label-container" for={`${CheckBoxProps.selectorLabel2}`}>{`${CheckBoxProps.selectorLabel2}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`} 
                        aria-label={`${CheckBoxProps.selectorLabel2}`} name="common" id={`${CheckBoxProps.selectorLabel2}`} value={`${CheckBoxProps.selectorLabel2}`}/>
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label>
                    </div>
                    <div class={`block-element`}>
                        <label className="label-container" for={`${CheckBoxProps.selectorLabel3}`}>{`${CheckBoxProps.selectorLabel3}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        aria-label={`${CheckBoxProps.selectorLabel3}`} name="common" id={`${CheckBoxProps.selectorLabel3}`} value={`${CheckBoxProps.selectorLabel3}`}/>
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label>
                    </div>
                    <div class={`block-element`}>
                        <label className="label-container" for={`${CheckBoxProps.selectorLabel4}`}>{`${CheckBoxProps.selectorLabel4}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        aria-label={`${CheckBoxProps.selectorLabel4}`} name="common" id={`${CheckBoxProps.selectorLabel4}`} value={`${CheckBoxProps.selectorLabel4}`} />
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label>
                    </div>
                    
                    </>
                ) : (" ")         
                }
                {/* <p role="alert" aria-atomic="true" class="error-msg hide" id="skills-err-text">Please choose skills</p> */}
            </fieldset>
        </div>
    )
}

export default CheckBox;