import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import './datepicker.scss'

function DateSetter(props) {
    const { DatePickerProps } = props;
    console.log(DatePickerProps, "props from and in datepicker");

    const [startDate, setStartDate] = useState(new Date());
    let showtime = true;
    let showonlytime = false;
    if(DatePickerProps.Choice_DateType == "date"){
        showtime = false;
    } else if(DatePickerProps.Choice_DateType == "time"){
        showonlytime = true;
    }

    return(
        <>
            <div className={`DatePicker-Content form-floating`}>
<div className={`date-picker-container  ${DatePickerProps?.Choice_DPWidth == "25"?"dp-w25":DatePickerProps?.Choice_DPWidth == "50"?"dp-w50":DatePickerProps?.Choice_DPWidth == "75"?"dp-w75":DatePickerProps?.Choice_DPWidth == "100"?"dp-w100":"" }`}>
<DatePicker
                    
                    // style={`padding: ${DatePickerProps.Choice_BoxSize == "small" ? '8': DatePickerProps.Choice_BoxSize == "medium" ? '16': DatePickerProps.Choice_BoxSize == "large" ? '24' : "0"}px 8px`}
                    // selectsRange={true}
                    // showDateSelect={false}
                    showTimeSelect={showtime}
                    showTimeSelectOnly={showonlytime}
                    className={`form-control form-control-lg 
                       
                        ${DatePickerProps?.Choice_Theme == "Dark"?"dp-dark":DatePickerProps?.Choice_Theme == "cg1"?"dp-blue":DatePickerProps?.Choice_Theme == "cg2"?"dp-purple":DatePickerProps?.Choice_Theme == "Normal"?"dp-normal":"" }
                        ${DatePickerProps.Choice_BoxSize == "dp-small" ? 'small': DatePickerProps.Choice_BoxSize == "medium" ? 'dp-medium': DatePickerProps.Choice_BoxSize == "large" ? 'dp-large' : "0"}`}
                    //showTimeSelect={`${DatePickerProps.Choice_DateType == "date" ? 'false': DatePickerProps.Choice_DateType == "time" ? 'true': DatePickerProps.Choice_DateType == "date-time" ? 'true' : "false"}`}
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)}
                    isClearable
                    placeholderText={`${DatePickerProps.datepickerLabel}`}
                    dateFormat={`${DatePickerProps.Choice_DateType == "date" ? 'MMMM d, yyyy': DatePickerProps.Choice_DateType == "time" ? 'h:mm aa': DatePickerProps.Choice_DateType == "date-time" ? 'MMMM d, yyyy h:mm aa' : " "}`}
                    
                />
</div>
               
                {/* <label for="datePicker">{DatePickerProps.datepickerLabel} </label> */}
                {/* <input type={`${DatePickerProps.Choice_DateType == 'date' ? 'date' : DatePickerProps.Choice_DateType == 'time' ? 'time' : DatePickerProps.Choice_DateType == 'date-time' ? 'datetime-local' : "text"  }`} 
                name="dob" class="form-field margin-bottom-small" id="dob" aria-required="true" autocomplete="off" aria-describedby="sample-tip"
                onblur="(this.type='text')" onfocus="(this.type='date')"
                placeholder={`${DatePickerProps.datepickerLabel}`} style={CustomDatePickerStyle}/> */}
            </div>
        </>
    )
}

export default DateSetter;