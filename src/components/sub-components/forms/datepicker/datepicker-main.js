import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import './datepicker.scss'

function DateSetter(props) {
    const { DatePickerProps } = props;
    console.log(DatePickerProps, "props from and in datepicker");

    const [startDate, setStartDate] = useState(new Date());

    const CustomDatePickerStyle = {
        padding: `${DatePickerProps.Choice_BoxSize == "small" ? '8': DatePickerProps.Choice_BoxSize == "medium" ? '16': DatePickerProps.Choice_BoxSize == "large" ? '24' : "0"}px 8px`,
        // width: `${ DatePickerProps.Choice_Width}%`,
        // border: `${ DatePickerProps.border_width > 0 ? DatePickerProps.border_width+'px solid #555555' : 'none'}` ,
        // "border-radius": `${DatePickerProps.Choice_BorderRadius == 'Yes' ? DatePickerProps.border_radius+'px' : DatePickerProps.Choice_BorderRadius == 'No' ? '0px' : 'none'}`,
        // "box-shadow": `${ DatePickerProps.Choice_BoxShadow == 'Yes' ? '2px 0px 8px #0000002b' : 'none'}`,
    };


    return(
        <>
            <div className={`DatePicker-Content`}>

                <DatePicker
                    style={`padding: ${DatePickerProps.Choice_BoxSize == "small" ? '8': DatePickerProps.Choice_BoxSize == "medium" ? '16': DatePickerProps.Choice_BoxSize == "large" ? '24' : "0"}px 8px`}
                    // selectsRange={true}
                    // startDate={startDate}
                    // endDate={endDate}
                    // onChange={(update) => {
                    //     setDateRange(update);
                    // }}
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)}
                    isClearable
                    placeholderText={`${DatePickerProps.datepickerLabel}`}
                    
                    
                />
                {/* <input type={`${DatePickerProps.Choice_DateType == 'date' ? 'date' : DatePickerProps.Choice_DateType == 'time' ? 'time' : DatePickerProps.Choice_DateType == 'date-time' ? 'datetime-local' : "text"  }`} 
                name="dob" class="form-field margin-bottom-small" id="dob" aria-required="true" autocomplete="off" aria-describedby="sample-tip"
                onblur="(this.type='text')" onfocus="(this.type='date')"
                placeholder={`${DatePickerProps.datepickerLabel}`} style={CustomDatePickerStyle}/> */}
            </div>
        </>
    )
}

export default DateSetter;