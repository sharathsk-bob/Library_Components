import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import TableHtml from "./table-html";
import Table from "./table-main";
// import EditAlertModal from "./edit-alert";
import './table.scss'


export const CustomStyleTable = styled.div`

`;

const TableComponent = ( ) => {

    const location = useLocation();
    const props = location.state.inputs;
    const { open: openEditTable, close: closeEditTable, ModalWrapper: ModalWrapperEditTable } = useModal();

    const [activeTab, setActiveTab] = useState(0);

    const formattedCSS = CustomStyleTable.componentStyle.rules[0];

    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(formattedCSS)
        .then(() => {
            setCopied(true);
            setTimeout(() => {
            setCopied(false);
            }, 2000);
        })
        .catch((error) => {
            console.error('Failed to copy to clipboard:', error);
        });
    };

    console.log(props, "props in Table.js");
    // const themeClass = {props.themeValue?}
    return (
        <>
        <ModalWrapperEditTable >
            {/* <EditTableModal close={closeEditTable} data={props} /> */}
        </ModalWrapperEditTable >

        <div className="header-output">
            <div className="component-header">
                <div className="header-left">
                    <h1>Table </h1> <span> Component</span> 
                </div>
                <div className="header-right">
                    <div className="button-section">
                        <Link to="/" className="link-button" aria-label="back to various component homepage">
                            Back
                        </Link>
                        <button class="buttons" aria-label="Edit values for Table Component" onClick={openEditTable} >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
            <Table/>
        </div>

        <div className="card-tabs">
            <button className={activeTab === 1 ? "active" : ""} aria-label="HTML Page of Table Component" onClick={() => setActiveTab(1)}>
                HTML
            </button>
            <button className={activeTab === 0 ? "active" : ""} aria-label="CSS Page of Table Component" onClick={() => setActiveTab(0)}>
                CSS
            </button>
        </div>

        <div className="card-content">
        {activeTab === 0 ? (
            <>
                <div className='clipboard-div'>
                    <button className='clipboard-btn' aria-label="copy to clipboard button" onClick={copyToClipboard}>
                        <i className={`fa ${copied ? 'fa-check' : 'fa-copy'}`} >
                            {copied ? ' Copied!' : ' Copy Code'}
                        </i>
                    </button>
                </div>
                <SyntaxHighlighter language="css" style={coy}>
                    {formattedCSS}
                </SyntaxHighlighter>  
            </>
        ) : (
            <TableHtml TableProps ={props} />
        )}
        </div>
        </>
    );
};
export default TableComponent;
