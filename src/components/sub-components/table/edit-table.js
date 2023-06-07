import React, { useState } from "react";
import { Link } from "react-router-dom";
import FocusTrap from "focus-trap-react";
import { FormField, Input } from "@fluentui/react-northstar";
import { useNavigate } from 'react-router-dom';
import closeIcon from "../../asset/images/cross-white.png";

const EditTableModal = (props)=>{

    const{close, data} = props;
    console.log("Check Input", data);

    const initialValues = {
        tablecaption: data.tablecaption,
        Choice_TableStriped: data.Choice_TableStriped,
        Choice_Pagination: data.Choice_Pagination,
        Choice_pageNo: data.Choice_pageNo,
        Choice_Width: data.Choice_Width,
        Choice_Theme: data.Choice_Theme,
    }

    const [inputs, setInputs] = useState(initialValues);
    const [inputErrors, setInputErrors] = useState({});
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const TableProps = {
        tablecaption: inputs.tablecaption,
        Choice_TableStriped: inputs.Choice_TableStriped,
        Choice_Pagination: inputs.Choice_Pagination,
        Choice_pageNo: inputs.Choice_pageNo,
        Choice_Width: inputs.Choice_Width,
        Choice_Theme: inputs.Choice_Theme,
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
    
            if(values.Choice_TableStriped  === ""){
                errors.Choice_TableStriped = "Please make decision for Table striped field";
            }
    
            if(values.Choice_Pagination === ""){
                errors.Choice_Pagination = "Please make decision for Pagination field";
            }
    
            if( values.Choice_Pagination === "Yes" ) {
                if(values.Choice_pageNo === undefined || values.Choice_pageNo === ''){
                    errors.Choice_pageNo = "Please select the choice for number of items per page from the dropdown";
                }
            }   
    
            if (values.Choice_Width === undefined) { 
                errors.Choice_Width = "Please select a width for table";
            } 
    
            if(values.Choice_Theme === undefined || values.Choice_Theme === ''){
                errors.Choice_Theme = "Please select the value from the dropdown";
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
            close();
        } else {
        }
    };

    return (
        <FocusTrap
            focusTrapOptions={{
                onDeactivate: close
            }}
        >
        <div className="modal_wapper">
            <div className="modal-content form-modalcontainer">
                <div className="form-header">
                <p>Table</p>
                    <button className="close-button" aria-label="close edit table modal" onClick={close}>
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
                            value={inputs.tablecaption} 
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
                        <label className="modal-label" htmlFor="Choice_TableStripedyes" aria-label="Select Yes if striped table is needed Asterik-Required">
                            <input
                                id="Choice_TableStripedyes"
                                className="modal-input"
                                type="radio"
                                value="Yes"
                                name="Choice_TableStriped"
                                checked={inputs.Choice_TableStriped === "Yes"}
                                onChange={handleChange}
                            />
                            <div className="tag">
                            <span className="tag__cat">Yes </span>
                            </div>            
                        </label>
                        </FormField>
                        <FormField className="modal-content-checkbox">
                        <label className="modal-label"  htmlFor="Choice_TableStripedno" aria-label="Select No if striped table is not needed">
                            <input
                                id="Choice_TableStripedno"
                                className="modal-input"
                                type="radio"
                                value="No"
                                name="Choice_TableStriped"
                                checked={inputs.Choice_TableStriped === "No"}
                                onChange={handleChange}
                            />
                            <div className="tag">
                            <span className="tag__cat">No</span>
                            </div>
                        </label>
                        </FormField>
                    </div>
                    <p className='error' aria-atomic="true">{inputErrors.Choice_TableStriped}</p>
                </div>

                <div className="input-field-container logo-field">
                    <p>Would you like to have Pagination in Table? <span className="asterik">*</span></p>
                    <div className="modal-checkbox">
                        <FormField className="modal-content-checkbox">
                        <label className="modal-label" htmlFor="Choice_Paginationyes" aria-label="Select Yes if pagination is needed Asterik-Required">
                            <input
                                id="Choice_Paginationyes"
                                className="modal-input"
                                type="radio"
                                value="Yes"
                                name="Choice_Pagination"
                                checked={inputs.Choice_Pagination === "Yes"}
                                onChange={handleChange}
                            />
                            <div className="tag">
                            <span className="tag__cat">Yes </span>
                            </div>            
                        </label>
                        </FormField>
                        <FormField className="modal-content-checkbox" htmlFor="Choice_Paginationno" aria-label="Select No if pagination is not needed">
                        <label className="modal-label">
                            <input
                                id="Choice_Paginationno"
                                className="modal-input"
                                type="radio"
                                value="No"
                                name="Choice_Pagination"
                                checked={inputs.Choice_Pagination === "No"}
                                onChange={handleChange}
                            />
                            <div className="tag">
                            <span className="tag__cat">No</span>
                            </div>
                        </label>
                        </FormField>
                    </div>
                    <p className='error' aria-atomic="true">{inputErrors.Choice_Pagination}</p>
                </div>

                { inputs.Choice_Pagination === "Yes" ?
                    <div className="input-field-container theme-field size-field">
                        <div className="modal-checkbox">
                        <FormField className="modal-content-theme">
                            <label for="Choice_pageNo" aria-label="Please select the choice for number of items per page Asterik-Required"> 
                            <p>Please select the choice for number of items per page<span className="asterik">*</span> </p>
                                <select name="Choice_pageNo" id="Choice_pageNo"  value={inputs.Choice_pageNo} onChange={handleChange}>
                                    <option value="">--</option>         
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                </select>
                            </label>
                        </FormField>
                        </div>
                        <p className="error">{inputErrors.Choice_pageNo}</p>
                    </div>
                : ""}

                <div className="input-field-container size-field" >
                    <div className="modal-checkbox">
                    <FormField className="modal-content-theme">
                        <label for="Choice_Width" aria-label="Edit table width value Asterik-Required"> 
                        <p>Please select width of the Table: <span className="asterik">*</span> </p>
                        </label>
                            <select name="Choice_Width" id="Choice_Width" value={inputs.Choice_Width} onChange={handleChange}>
                                <option value="">--</option>         
                                <option value="25">25 %</option>
                                <option value="50">50 %</option>
                                <option value="75">75 %</option>
                                <option value="100">100 %</option>
                            </select>
                    </FormField>
                    </div>
                    <p className='error'>{inputErrors.Choice_Width}</p>
                </div>

                <div className="input-field-container theme-field">
                    <div className="modal-checkbox">
                    <FormField className="modal-content-theme">
                        <label for="Choice_Theme" aria-label="Edit the theme for the table Asterik-Required"> 
                        <p>Please select the theme colour: <span className="asterik">*</span> </p>
                            <select name="Choice_Theme" id="Choice_Theme" value={inputs.Choice_Theme} onChange={handleChange}>
                                <option value="">--</option>         
                                <option value="Normal">Light</option>
                                <option value="Dark">Dark</option>
                                <option value="cg1">Blue</option>
                                <option value="cg2">Purple</option>
                            </select>
                        </label>
                    </FormField> 
                    </div>
                    <p className="error">{inputErrors.Choice_Theme}</p>
                </div>

                <div className="button-section">
                    <div className="link-button">
                        <Link state={TableProps} className="btn btn-primary btn-lg" onClick={OnSubmit}>
                            Update
                        </Link>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
        </FocusTrap>
        );
};

export default EditTableModal;