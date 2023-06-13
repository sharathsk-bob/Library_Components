import React from 'react';
import './breakpointLayout.scss';

function BreakpointLayout(props) {

    const{ BreakpointLayoutProps } = props;
    console.log(BreakpointLayoutProps, "props in BreakpointLayout-main.js");

    return(
        <>
        <div class={`BreakpointLayout-Content`}>
            <div class="container-fluid">
                <div class="row">
                    { BreakpointLayoutProps.numLayouts == 1 && BreakpointLayoutProps.breakpointLayoutText1 != undefined && BreakpointLayoutProps.breakpointLayoutTitle1!= undefined ? (
                            <>
                            <div class="col-12">
                                <div class="column">
                                    <h5 class={`${BreakpointLayoutProps?.Choice_Theme == "Dark"?"BL-dark":BreakpointLayoutProps?.Choice_Theme == "cg1"?"BL-blue": BreakpointLayoutProps?.Choice_Theme == "cg2"?"BL-purple":BreakpointLayoutProps?.Choice_Theme == "Normal"?"BL-normal":"" }`}>{`${BreakpointLayoutProps.breakpointLayoutTitle1}`}</h5>
                                    <p>{`${BreakpointLayoutProps.breakpointLayoutText1}`}</p>
                                </div>
                            </div>
                            </>
                        ) : BreakpointLayoutProps.numLayouts == 2 ? (
                            <>
                            <div class="col-md-6 col-xs-12">
                                <div class="column">
                                    <h5 class={`${BreakpointLayoutProps?.Choice_Theme == "Dark"?"BL-dark":BreakpointLayoutProps?.Choice_Theme == "cg1"?"BL-blue": BreakpointLayoutProps?.Choice_Theme == "cg2"?"BL-purple":BreakpointLayoutProps?.Choice_Theme == "Normal"?"BL-normal":"" }`}>{`${BreakpointLayoutProps.breakpointLayoutTitle1}`}</h5>
                                    <p>{`${BreakpointLayoutProps.breakpointLayoutText1}`}</p>
                                </div>       
                            </div>
                            <div class="col-md-6  col-xs-12">
                                <div class="column">
                                    <h5 class={`${BreakpointLayoutProps?.Choice_Theme == "Dark"?"BL-dark":BreakpointLayoutProps?.Choice_Theme == "cg1"?"BL-blue": BreakpointLayoutProps?.Choice_Theme == "cg2"?"BL-purple":BreakpointLayoutProps?.Choice_Theme == "Normal"?"BL-normal":"" }`}>{`${BreakpointLayoutProps.breakpointLayoutTitle2}`}</h5>
                                    <p>{`${BreakpointLayoutProps.breakpointLayoutText2}`}</p>
                                </div>
                            </div>                 
                            </>
                        ) : BreakpointLayoutProps.numLayouts == 3 ? (
                            <>
                            <div class="col-md-4  col-xs-12">
                                <div class="column">
                                    <h5 class={`${BreakpointLayoutProps?.Choice_Theme == "Dark"?"BL-dark":BreakpointLayoutProps?.Choice_Theme == "cg1"?"BL-blue": BreakpointLayoutProps?.Choice_Theme == "cg2"?"BL-purple":BreakpointLayoutProps?.Choice_Theme == "Normal"?"BL-normal":"" }`}>{`${BreakpointLayoutProps.breakpointLayoutTitle1}`}</h5>
                                    <p>{`${BreakpointLayoutProps.breakpointLayoutText1}`}</p>
                                </div>
                            </div>
                            <div class="col-md-4  col-xs-12">
                                <div class="column">
                                    <h5 class={`${BreakpointLayoutProps?.Choice_Theme == "Dark"?"BL-dark":BreakpointLayoutProps?.Choice_Theme == "cg1"?"BL-blue": BreakpointLayoutProps?.Choice_Theme == "cg2"?"BL-purple":BreakpointLayoutProps?.Choice_Theme == "Normal"?"BL-normal":"" }`}>{`${BreakpointLayoutProps.breakpointLayoutTitle2}`}</h5>
                                    <p>{`${BreakpointLayoutProps.breakpointLayoutText2}`}</p>
                                </div>
                            </div>
                            <div class="col-md-4  col-xs-12">
                                <div class="column">
                                    <h5 class={`${BreakpointLayoutProps?.Choice_Theme == "Dark"?"BL-dark":BreakpointLayoutProps?.Choice_Theme == "cg1"?"BL-blue": BreakpointLayoutProps?.Choice_Theme == "cg2"?"BL-purple":BreakpointLayoutProps?.Choice_Theme == "Normal"?"BL-normal":"" }`}>{`${BreakpointLayoutProps.breakpointLayoutTitle3}`}</h5>
                                    <p>{`${BreakpointLayoutProps.breakpointLayoutText3}`}</p>
                                </div>
                            </div>
                            </>
                        ) : BreakpointLayoutProps.numLayouts == 4 ? (
                            <>
                            <div class="col-md-3 col-12">
                                <div class="column">
                                    <h5 class={`${BreakpointLayoutProps?.Choice_Theme == "Dark"?"BL-dark":BreakpointLayoutProps?.Choice_Theme == "cg1"?"BL-blue": BreakpointLayoutProps?.Choice_Theme == "cg2"?"BL-purple":BreakpointLayoutProps?.Choice_Theme == "Normal"?"BL-normal":"" }`}>{`${BreakpointLayoutProps.breakpointLayoutTitle1}`}</h5>
                                    <p>{`${BreakpointLayoutProps.breakpointLayoutText1}`}</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-12">
                                <div class="column">
                                    <h5 class={`${BreakpointLayoutProps?.Choice_Theme == "Dark"?"BL-dark":BreakpointLayoutProps?.Choice_Theme == "cg1"?"BL-blue": BreakpointLayoutProps?.Choice_Theme == "cg2"?"BL-purple":BreakpointLayoutProps?.Choice_Theme == "Normal"?"BL-normal":"" }`}>{`${BreakpointLayoutProps.breakpointLayoutTitle2}`}</h5>
                                    <p>{`${BreakpointLayoutProps.breakpointLayoutText2}`}</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-12">
                                <div class="column">
                                    <h5 class={`${BreakpointLayoutProps?.Choice_Theme == "Dark"?"BL-dark":BreakpointLayoutProps?.Choice_Theme == "cg1"?"BL-blue": BreakpointLayoutProps?.Choice_Theme == "cg2"?"BL-purple":BreakpointLayoutProps?.Choice_Theme == "Normal"?"BL-normal":"" }`}>{`${BreakpointLayoutProps.breakpointLayoutTitle3}`}</h5>
                                    <p>{`${BreakpointLayoutProps.breakpointLayoutText3}`}</p>
                                </div>
                            </div>   
                            <div class="col-md-3 col-12">
                                <div class="column">
                                    <h5 class={`${BreakpointLayoutProps?.Choice_Theme == "Dark"?"BL-dark":BreakpointLayoutProps?.Choice_Theme == "cg1"?"BL-blue": BreakpointLayoutProps?.Choice_Theme == "cg2"?"BL-purple":BreakpointLayoutProps?.Choice_Theme == "Normal"?"BL-normal":"" }`}>{`${BreakpointLayoutProps.breakpointLayoutTitle4}`}</h5>
                                    <p>{`${BreakpointLayoutProps.breakpointLayoutText4}`}</p>
                                </div>
                            </div> 
                            </>
                        ) : (" ")}
                </div>
            </div> 
        </div>      
        </>
    )
}

export default BreakpointLayout;