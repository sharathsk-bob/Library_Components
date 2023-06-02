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
                ${CheckBoxProps?.Choice_Layout == "Vertical"?"disp-col":CheckBoxProps?.Choice_Layout == "Horizontal"?"disp-row":"" }
                `} id="skills-field">
                <legend><span class="asterik" aria-label="Asterik-Required">*</span> {`${CheckBoxProps.boxLabel}`}</legend>
                { CheckBoxProps.numSelects == 1 ? (
                    <div class={`block-element ${CheckBoxProps?.Choice_Theme == "Dark"?"s-dark":CheckBoxProps?.Choice_Theme == "cg1"?"s-blue":CheckBoxProps?.Choice_Theme == "cg2"?"s-purple":CheckBoxProps?.Choice_Theme == "Normal"?"s-normal":"" }`}>
                        <label className="label-container" for="Developer">{`${CheckBoxProps.selectorLabel1}`}
                        {/* id name aur value SelectionType*/}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        name="common" id="Developer" value={`${CheckBoxProps.selectorLabel1}`} aria-describedby="skills-err-text"/>
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label> 
                    </div>
                ) : CheckBoxProps.numSelects == 2 ? ( 
                    <>
                    <div class={`block-element ${CheckBoxProps?.Choice_Theme == "Dark"?"s-dark":CheckBoxProps?.Choice_Theme == "cg1"?"s-blue":CheckBoxProps?.Choice_Theme == "cg2"?"s-purple":CheckBoxProps?.Choice_Theme == "Normal"?"s-normal":"" }`}>
                        <label className="label-container" for={`${CheckBoxProps.selectorLabel1}`}>{`${CheckBoxProps.selectorLabel1}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        aria-label="Text1" name="common" id={`${CheckBoxProps.selectorLabel1}`} value={`${CheckBoxProps.selectorLabel1}`} />
                        <span tabIndex="1" class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label> 
                    </div>
                    <div class={`block-element ${CheckBoxProps?.Choice_Theme == "Dark"?"s-dark":CheckBoxProps?.Choice_Theme == "cg1"?"s-blue":CheckBoxProps?.Choice_Theme == "cg2"?"s-purple":CheckBoxProps?.Choice_Theme == "Normal"?"s-normal":"" }`}>
                        <label className="label-container" for={`${CheckBoxProps.selectorLabel2}`}>{`${CheckBoxProps.selectorLabel2}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`} 
                        aria-label="Text2" name="common" id={`${CheckBoxProps.selectorLabel2}`} value={`${CheckBoxProps.selectorLabel2}`} />
                        <span tabIndex="1" class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label>
                    </div>
                    </>
                ) : CheckBoxProps.numSelects == 3 ? ( 
                    <>
                    <div class={`block-element ${CheckBoxProps?.Choice_Theme == "Dark"?"s-dark":CheckBoxProps?.Choice_Theme == "cg1"?"s-blue":CheckBoxProps?.Choice_Theme == "cg2"?"s-purple":CheckBoxProps?.Choice_Theme == "Normal"?"s-normal":"" }`}>
                        <label className="label-container" for="Developer">{`${CheckBoxProps.selectorLabel1}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        name="common" id="Developer" value={`${CheckBoxProps.selectorLabel1}`} aria-describedby="skills-err-text"/>
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label> 
                    </div>
                    <div class={`block-element ${CheckBoxProps?.Choice_Theme == "Dark"?"s-dark":CheckBoxProps?.Choice_Theme == "cg1"?"s-blue":CheckBoxProps?.Choice_Theme == "cg2"?"s-purple":CheckBoxProps?.Choice_Theme == "Normal"?"s-normal":"" }`}>
                        <label className="label-container" for="Tester">{`${CheckBoxProps.selectorLabel2}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`} 
                        name="common" id="Tester" value={`${CheckBoxProps.selectorLabel2}`} aria-describedby="skills-err-text"/>
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label>
                    </div>
                    <div class={`block-element ${CheckBoxProps?.Choice_Theme == "Dark"?"s-dark":CheckBoxProps?.Choice_Theme == "cg1"?"s-blue":CheckBoxProps?.Choice_Theme == "cg2"?"s-purple":CheckBoxProps?.Choice_Theme == "Normal"?"s-normal":"" }`}>
                        <label className="label-container" for="Designer">{`${CheckBoxProps.selectorLabel3}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        name="common" id="Designer" value={`${CheckBoxProps.selectorLabel3}`} aria-describedby="skills-err-text"/>
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label>
                    </div>
                    </>
                ) : CheckBoxProps.numSelects == 4 ? ( 
                    <>
                    <div class={`block-element ${CheckBoxProps?.Choice_Theme == "Dark"?"s-dark":CheckBoxProps?.Choice_Theme == "cg1"?"s-blue":CheckBoxProps?.Choice_Theme == "cg2"?"s-purple":CheckBoxProps?.Choice_Theme == "Normal"?"s-normal":"" }`}>
                        <label className="label-container" for="Developer">{`${CheckBoxProps.selectorLabel1}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        name="common" id="Developer" value={`${CheckBoxProps.selectorLabel1}`} aria-describedby="skills-err-text"/>
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label> 
                    </div>
                    <div class={`block-element ${CheckBoxProps?.Choice_Theme == "Dark"?"s-dark":CheckBoxProps?.Choice_Theme == "cg1"?"s-blue":CheckBoxProps?.Choice_Theme == "cg2"?"s-purple":CheckBoxProps?.Choice_Theme == "Normal"?"s-normal":"" }`}>
                        <label className="label-container" for="Tester">{`${CheckBoxProps.selectorLabel2}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`} 
                        name="common" id="Tester" value={`${CheckBoxProps.selectorLabel2}`} aria-describedby="skills-err-text"/>
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label>
                    </div>
                    <div class={`block-element ${CheckBoxProps?.Choice_Theme == "Dark"?"s-dark":CheckBoxProps?.Choice_Theme == "cg1"?"s-blue":CheckBoxProps?.Choice_Theme == "cg2"?"s-purple":CheckBoxProps?.Choice_Theme == "Normal"?"s-normal":"" }`}>
                        <label className="label-container" for="Designer">{`${CheckBoxProps.selectorLabel3}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        name="common" id="Designer" value={`${CheckBoxProps.selectorLabel3}`} aria-describedby="skills-err-text"/>
                        <span class={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkmark":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radiomark":"" }`}></span>
                        </label>
                    </div>
                    <div class={`block-element ${CheckBoxProps?.Choice_Theme == "Dark"?"s-dark":CheckBoxProps?.Choice_Theme == "cg1"?"s-blue":CheckBoxProps?.Choice_Theme == "cg2"?"s-purple":CheckBoxProps?.Choice_Theme == "Normal"?"s-normal":"" }`}>
                        <label className="label-container" for="Manager">{`${CheckBoxProps.selectorLabel4}`}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        name="common" id="Manager" value={`${CheckBoxProps.selectorLabel4}`} aria-describedby="skills-err-text"/>
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