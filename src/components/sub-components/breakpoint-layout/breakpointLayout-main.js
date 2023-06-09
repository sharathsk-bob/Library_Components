import React from 'react';
import './breakpointLayout.scss';

function BreakpointLayout(props) {

    const{ BreakpointLayoutProps } = props;
    console.log(BreakpointLayoutProps, "props in BreakpointLayout-main.js");

    return(
        <>
        <p>Hi</p>
        </>
    )
}

export default BreakpointLayout;