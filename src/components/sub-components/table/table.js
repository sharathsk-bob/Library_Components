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
    padding: 0.8em 0.8em;
    background-color: var(--color-white);
    border: 2px var(--color-black) solid;
}
.Table-Content > div:nth-child(3) {
    display: none;
}

// .table-heading {
//     font-size: larger;
//     margin-top: 20px;
//     margin-bottom: 20px;
//     color: #0070ad;
// }

.sub-Theader{
    background: var(--color-white);
    display: flex;
}

.Table-Content header {
    display: block;
    background: var(--color-white);
    padding: 4px 0px 4px 0px;
}
        
.caption-position {
    display: block;
    font-size: large;
    font-weight: 600;
    caption-side: top;
    color: var(--color-black);
}

.search-box {
    align-content: center;
    margin-left: auto;
    background: var(--color-white);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 4px 0px 4px 0px;
    i {
        line-height: 1.65em;
    }
}

.filter-input {
    border: 1px solid var(--color-grey-light);
    padding: 4px 8px 4px 8px;
    @media screen and (max-width: $bp-sm-mobile) {
        width: 120px;
    }
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

.rdt_Table {
    border: 0.5px var(--color-black) solid;
}

.rdt_TableHead {
    .rdt_TableCol {
        border-right: 2px var(--color-white) solid;
    }
    :last-child {
        border-right: none;
    }
}

.rdt_TableRow {
    .rdt_TableCell {
        border-right: 2px #ccc solid;
    }
    :last-child {
        border-right: none;
    }
}

.rdt_Pagination {
    display: none;
}

// div:has(> nav) {
//     display: none;
// }

.pagination-footer {
    padding: 8px 0px;
    display: flex;
    background-color: var(--color-white);
    align-items: center;
    ul, p {
        margin-bottom: 0 !important;
        padding: 0 !important;
    }
    @media screen and (max-width: 576px) {
        flex-direction: column;
        align-items: center;
    }
}

.Table-Content ul {
    display: flex;
    margin-left: auto;
    list-style: none;
    @media screen and (max-width: 576px) {
        margin: auto;
    }
    li {   
        background-color: var(--color-white);
        color: var(--color-black);
        transition: all 0.7s;
        border: 1px var(--color-black) solid;
        padding: 3px 8px;
        font-weight: 600; 
        cursor: pointer;
        a {
            padding: 3px 8px;
            text-decoration: none;
        }
    }
    li + li {
        margin-left: 8px;
    }
    .disabled {
        opacity: 0.4;
        //background-color: #cccc;
        // a{
        //     color: #a0a0a0 !important;
        // }
    }
    // .selected {
    //     background-color: var(--color-black);
    //     color: var(--color-white);
    // }
}

.Tbtn-Normal {
    background-color: #B7C9E2 !important;
    color: var(--color-black) !important;
}
.Tbtn-Dark {
    background-color: var(--color-black) !important;
    color: var(--color-white) !important;
}
.Tbtn-cg1 {
    background-color: var(--color-capgemini-blue) !important;
    color: var(--color-white) !important;
} 
.Tbtn-cg2 {
    background-color: var(--color-purple-wbh) !important;
    color: var(--color-white) !important;
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
