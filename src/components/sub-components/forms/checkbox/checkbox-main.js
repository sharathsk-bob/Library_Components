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
                `}
            id="skills-field">
                <legend><span class="asterik" aria-label="Asterik-Required">*</span> {`${CheckBoxProps.boxLabel}`}</legend>
                { CheckBoxProps.numSelects == 1 ? (
                    <div class="block-element">
                        {/* id name aur value SelectionType*/}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        name="common" id="Developer" value={`${CheckBoxProps.selectorLabel1}`} aria-describedby="skills-err-text"/>
                        <label for="Developer">{`${CheckBoxProps.selectorLabel1}`}</label> 
                    </div>
                ) : CheckBoxProps.numMenus == 2 ? ( 
                    <>
                    <div class="block-element">
                        {/* id name aur value SelectionType*/}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        name="common" id="Developer" value={`${CheckBoxProps.selectorLabel1}`} aria-describedby="skills-err-text"/>
                        <label for="Developer">{`${CheckBoxProps.selectorLabel1}`}</label> 
                    </div>
                    <div class="block-element">
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`} 
                        name="common" id="Tester" value={`${CheckBoxProps.selectorLabel2}`} aria-describedby="skills-err-text"/>
                        <label for="Tester">{`${CheckBoxProps.selectorLabel2}`}</label>
                    </div>
                    </>
                ) : CheckBoxProps.numSelects == 3 ? ( 
                    <>
                    <div class="block-element">
                        {/* id name aur value SelectionType*/}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        name="common" id="Developer" value={`${CheckBoxProps.selectorLabel1}`} aria-describedby="skills-err-text"/>
                        <label for="Developer">{`${CheckBoxProps.selectorLabel1}`}</label> 
                    </div>
                    <div class="block-element">
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`} 
                        name="common" id="Tester" value={`${CheckBoxProps.selectorLabel2}`} aria-describedby="skills-err-text"/>
                        <label for="Tester">{`${CheckBoxProps.selectorLabel2}`}</label>
                    </div>
                    <div class="block-element">
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        name="common" id="Designer" value={`${CheckBoxProps.selectorLabel3}`} aria-describedby="skills-err-text"/>
                        <label for="Designer">{`${CheckBoxProps.selectorLabel3}`}</label>
                    </div>
                    </>
                ) : CheckBoxProps.numSelects == 4 ? ( 
                    <>
                    <div class="block-element">
                        {/* id name aur value SelectionType*/}
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        name="common" id="Developer" value={`${CheckBoxProps.selectorLabel1}`} aria-describedby="skills-err-text"/>
                        <label for="Developer">{`${CheckBoxProps.selectorLabel1}`}</label> 
                    </div>
                    <div class="block-element">
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`} 
                        name="common" id="Tester" value={`${CheckBoxProps.selectorLabel2}`} aria-describedby="skills-err-text"/>
                        <label for="Tester">{`${CheckBoxProps.selectorLabel2}`}</label>
                    </div>
                    <div class="block-element">
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        name="common" id="Designer" value={`${CheckBoxProps.selectorLabel3}`} aria-describedby="skills-err-text"/>
                        <label for="Designer">{`${CheckBoxProps.selectorLabel3}`}</label>
                    </div>
                    <div class="block-element">
                        <input type={`${CheckBoxProps?.Choice_SelectionType == "Check-Box"?"checkbox":CheckBoxProps?.Choice_SelectionType == "Radio-Button"?"radio":"" }`}
                        name="common" id="Designer" value={`${CheckBoxProps.selectorLabel4}`} aria-describedby="skills-err-text"/>
                        <label for="Designer">{`${CheckBoxProps.selectorLabel4}`}</label>
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