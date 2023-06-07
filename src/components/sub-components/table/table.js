import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useModal from "../../sub-components/use-modal/use-modal";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import TableHtml from "./table-html";
import Table from "./table-main";
import EditTableModal from "./edit-table";
import './table.scss'


export const CustomStyleTable = styled.div`
.Table-Content {
    margin: 1.2em 0.8em;
}

.table-heading {
    font-size: larger;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #0070ad;
}

.sub-Theader{
    background: transparent;
    display: flex;
    justify-content: space-between;
}

.Table-Content header {
    display: block;
    background: transparent;
    justify-content: space-evenly;
    padding: 4px 16px 4px 0px;

}
        
.caption-position {
    display: block;
    caption-side: top;
}

.filter-input {
    height: 32px;
    width: 120px;
    border-radius: 3px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #e5e5e5;
    padding: 0 32px 0 16px;
}

.filter-close {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 34px;
    width: 32px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
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
            <EditTableModal close={closeEditTable} data={props} />
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
            <Table TableProps ={props} />
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
