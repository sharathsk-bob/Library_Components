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
    // div:nth-child(3) {
    //     display: none;
    // }
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
    padding: 4px 0px 4px 0px;
}
        
.caption-position {
    display: block;
    caption-side: top;
}

.search-box {
    // height: 32px;
    // width: 120px;
    align-content: center;
    background: white;
    // border-radius: 3px;
    // border-top-left-radius: 5px;
    // border-bottom-left-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid var(--color-grey-light);
    padding: 4px 8px 4px 8px;
    i {
        line-height: 1.65em;
    }
}

.filter-input {
    border: none;
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

.rdt_TableHead {
    .rdt_TableCol {
        border-right: 2px white solid;
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

// .Table-Content div + div {
//     display: none;
// }

// .table thead [data-test=table-foot] {
//     display: none !important;
// }

// .dataTables_paginate {
//     .pagination {
//         li {
//             --bs-pagination-color: black !important;
//             --bs-pagination-bg: white !important;
//             --bs-pagination-active-color: #fff;
//             --bs-pagination-active-bg: #0070ad;
//             --bs-pagination-active-border-color: black;
//             --bs-pagination-disabled-color: #6c757d;
//             --bs-pagination-disabled-bg: #fff;
//             --bs-pagination-disabled-border-color: #dee2e6;
//         }
//     }
    
// }

.rdt_Pagination {
    display: none;
}

div:has(> nav) {
    display: none;
}

.pagination-footer {
    padding: 8px;
    display: flex;
    background-color: white;
    ul, p {
        margin-bottom: 0 !important;
    }
}

.Table-Content ul {
    display: flex;
    margin-left: auto;
    list-style: none;
    justify-content: center;
    li {   
        background-color: white;
        color: black;
        border: 1px black solid;
        margin-right: 8px;
        cursor: pointer;
        a {
            padding: 8px;
            text-decoration: none;
        }
    }
    .disabled {
        background-color: #cccc;
        a{
            color: #a0a0a0 !important;
        }
    }
    // .selected {
    //     background-color: black;
    //     color: white;
    // }
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
