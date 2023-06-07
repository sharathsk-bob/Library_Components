import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import closeIcon from "../../asset/images/cross-white.png";

const TableForm =(props)=>{

    const {close} = props;
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({});
    const [inputErrors, setInputErrors] = useState({});
    
    const [tableStriped, setTableStriped] = useState("");
    const [pagination, setPagination] = useState("");
    const [pageNo, setPageNo] = useState();
    // const [tableWidth, setTableWidth] = useState();
    const [themeValue, setThemeValue] = useState();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const checkValidation = (values) => {

        let errors = {};

        if (values.tablecaption == undefined || values.tablecaption === '') {
        errors.tablecaption = "Table caption is required"; 
        } else if (values.tablecaption !== undefined) {
            if(values.tablecaption.length > 25){
                errors.tablecaption = "Table caption should be shorter"; 
            } 
        }

        if(tableStriped === ""){
            errors.tableStriped = "Please make decision for Table striped field";
        } else {
            inputs.Choice_TableStriped = tableStriped;
        }

        if(pagination === ""){
            errors.pagination = "Please make decision for Pagination field";
        } else {
            inputs.Choice_Pagination = pagination;
        }

        if( pagination === "Yes" ) {
            if(pageNo === undefined || pageNo === ''){
                errors.pageNo = "Please select the choice for number of items per page from the dropdown";
            } else {
                inputs.Choice_pageNo = pageNo;
            }
        }   

        // if (tableWidth === undefined) { 
        //     errors.tableWidth = "Please select a width for table";
        // } else {
        //     inputs.Choice_Width = tableWidth;
        // }

        if(themeValue === undefined || themeValue === ''){
            errors.theme = "Please select the value from the dropdown";
        } else {
            inputs.Choice_Theme = themeValue;
        }
        return errors;
    };

    async function OnSubmit (e)  {

        e.preventDefault();
        let validerrors= await checkValidation(inputs);
        setInputErrors(validerrors);
        if(Object.keys(validerrors).length === 0)
        {
        console.log("Inputs Sent!!!", inputs);
        navigate("/table", {state: {inputs}});
        } else {
        }   
    };

    const TableProps = {
        tablecaption: inputs.tablecaption,
        Choice_TableStriped: inputs.alerttype,
        Choice_Pagination: inputs.pagination,
        Choice_pageNo: inputs.pageNo,
        // Choice_Width: inputs.Choice_Width,
        Choice_Theme: inputs.theme,
    };

    return (
        <>
        <FocusTrap
            focusTrapOptions={{
                //escapeDeactivates: false
                onDeactivate: close
            }}
        >
        <div className="modal_wapper">
            <div className="modal-content form-modalcontainer">
                <div className="form-header">
                <p>Table</p>
                    <button className="close-button" aria-label="close create table modal" onClick={close}>
                        <img src={closeIcon}></img>
                    </button>
                </div>

            <div className="modal-container tool-tipcontainer">

            <div className="input-field-container">
                <FormField className="form-modal__content">
                    <label
                    className="wbh-modal__label"
                    aria-label="Caption for the Table Asterik-Required"
                    for="tablecaption"
                    >
                    Caption for the Table: <span className="asterik">*</span> 
                    <Input
                        id="tablecaption"
                        className="text_modal__input"
                        autoComplete="off"
                        name="tablecaption"
                        maxLength="25"
                        value={inputs.tablecaption || ""} 
                        onChange={handleChange}
                        aria-required="true"
                    />
                    </label>
                    <p className='error' aria-atomic="true">{inputErrors.tablecaption}</p>
                </FormField>
            </div>

            <div className="input-field-container logo-field">
                <p>Would you like table to be striped? <span className="asterik">*</span></p>
                <div className="modal-checkbox">
                <FormField className="modal-content-checkbox">
                <label className="modal-label" htmlFor="tableStripedyes" aria-label="Select Yes if striped table is needed Asterik-Required">
                    <input
                        id="tableStripedyes"
                        className="modal-input"
                        type="radio"
                        value="Yes"
                        name="tableStriped"
                        checked={tableStriped === "Yes"}
                        onChange={(e) => {setTableStriped("Yes");}}
                    />
                    <div className="tag">
                    <span className="tag__cat">Yes </span>
                    </div>            
                </label>
                </FormField>
                <FormField className="modal-content-checkbox">
                <label className="modal-label"  htmlFor="tableStripedno" aria-label="Select No if striped table is not needed">
                    <input
                        id="tableStripedno"
                        className="modal-input"
                        type="radio"
                        value="No"
                        name="tableStriped"
                        checked={tableStriped === "No"}
                        onChange={(e) => {setTableStriped("No");}}
                    />
                    <div className="tag">
                    <span className="tag__cat">No</span>
                    </div>
                </label>
                </FormField>
            </div>
            <p className='error' aria-atomic="true">{inputErrors.tableStriped}</p>
            </div>

            <div className="input-field-container logo-field">
                <p>Would you like to have Pagination in Table? <span className="asterik">*</span></p>
                <div className="modal-checkbox">
                <FormField className="modal-content-checkbox">
                <label className="modal-label" htmlFor="Paginationyes" aria-label="Select Yes if pagination is needed Asterik-Required">
                    <input
                        id="Paginationyes"
                        className="modal-input"
                        type="radio"
                        value="Yes"
                        name="Pagination"
                        checked={pagination === "Yes"}
                        onChange={(e) => {setPagination("Yes");}}
                    />
                    <div className="tag">
                    <span className="tag__cat">Yes </span>
                    </div>            
                </label>
                </FormField>
                <FormField className="modal-content-checkbox" htmlFor="Paginationno" aria-label="Select No if pagination is not needed">
                <label className="modal-label">
                    <input
                        id="Paginationno"
                        className="modal-input"
                        type="radio"
                        value="No"
                        name="Pagination"
                        checked={pagination === "No"}
                        onChange={(e) => {setPagination("No");}}
                    />
                    <div className="tag">
                    <span className="tag__cat">No</span>
                    </div>
                </label>
                </FormField>
            </div>
            <p className='error' aria-atomic="true">{inputErrors.pagination}</p>
            </div>

            { pagination === "Yes" ?
            <div className="input-field-container theme-field size-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="pageno" aria-label="Please select the choice for number of items per page Asterik-Required"> 
                    <p>Please select the choice for number of items per page<span className="asterik">*</span> </p>
                        <select name="pageno" id="pageno"  value={pageNo} onChange={(event) => setPageNo(event.target.value)}>
                            <option value="">--</option>         
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </FormField>
                </div>
                <p className="error">{inputErrors.pageNo}</p>
            </div>
            : ""}

            {/* <div className="input-field-container size-field" >
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="tablewidth" aria-label="Select table width value Asterik-Required"> 
                    <p>Please select width of the Table: <span className="asterik">*</span> </p>
                    </label>
                        <select name="tablewidth" id="tablewidth"  value={tableWidth} onChange={(event) => setTableWidth(event.target.value)}>
                            <option value="">--</option>         
                            <option value="25">25 %</option>
                            <option value="50">50 %</option>
                            <option value="75">75 %</option>
                            <option value="100">100 %</option>
                        </select>
                </FormField>
                </div>
                <p className='error'>{inputErrors.tableWidth}</p>
            </div> */}

            <div className="input-field-container theme-field size-field">
                <div className="modal-checkbox">
                <FormField className="modal-content-theme">
                    <label for="theme" aria-label="Select the theme for the table Asterik-Required"> 
                    <p>Please select the theme colour: <span className="asterik">*</span> </p>
                        <select name="theme" id="theme"  value={themeValue} onChange={(event) => setThemeValue(event.target.value)}>
                            <option value="">--</option>         
                            <option value="Normal">Light</option>
                            <option value="Dark">Dark</option>
                            <option value="cg1">Blue</option>
                            <option value="cg2">Purple</option>
                        </select>
                    </label>
                </FormField>
                </div>
                <p className="error">{inputErrors.theme}</p>
            </div>

            <div className="button-section">
                <div className="link-button">
                    <Link props={TableProps} className="btn btn-primary btn-lg" onClick={OnSubmit}>
                        Submit
                    </Link>
                </div>
            </div>

            </div>
            </div>
        </div>
        </FocusTrap>

        </>
    );
};

export default TableForm;