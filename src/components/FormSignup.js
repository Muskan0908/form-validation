import React from 'react';
import './form.css';
import useForm from './useForm';
import validate from './ValidateInfo';

const FormSignup = ({ submitForm,setCopy,copy}) => {

    const {handleChange,handleSubmit,errors,values}=useForm(submitForm,validate);
    
    return (
        <div>
            {console.log(values)}
            {setCopy(values)}
           
            <form className="form" onSubmit={handleSubmit}>
            <h1>Form</h1>
                <div className="form-inputs">
                    <label htmlFor="date" className="form-label">Select start date:</label>
                    <input type="date" id="date" name="date" className="form-input" onChange={handleChange}/>
                    {errors.date && <p>{errors.date}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="repeat" className="form-label">Select Repeat Type:</label>
                    <select name="repeat" id="repeat" className="form-input"
                    onChange={
                       
                    handleChange
                    }>
                        <option className="selected">Repeats</option>
                        <option value="None">None</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                    </select>
                    {errors.repeat && <p>{errors.repeat}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="shift" className="form-label">Select Shift:</label>
                    <select name="shift" id="shift" className="form-input" 
                    onChange={/*()=>{
                        let x=document.getElementById("start-time");
                        x.value="05:00";
                        let y=document.getElementById("end-time");
                        y.value="09:00";}*/
                        handleChange

                    }>
                        <option className="selected">Shifts</option>
                        <option value="Morning Shift - 5am to 9am">Morning Shift - 5am to 9am</option>
                    </select>
                    {errors.shift && <p>{errors.shift}</p>}

                </div>
                <div className="form-inputs">
                    <label htmlFor="startTime" className="form-label" >Select Start Time:</label>
                    <input type="time" id="startTime" name="startTime" defaultValue="00:00" onChange={handleChange}/>
                    {errors.startTime && <p>{errors.startTime}</p>}

                </div>
                <div className="form-inputs">
                    <label htmlFor="endTime" className="form-label">Select End Time:</label>
                    <input type="time" id="endTime" name="endTime" defaultValue="00:00" onChange={handleChange}/>
                    {errors.endTime && <p>{errors.endTime}</p>}

                </div>
                <div className="form-inputs">
                    <div className="inner-form">
                        <label>Please Select the day of the week</label>
                        <div className="days" onChange={handleChange} >
                            <div className="container">
                                <h5>MON</h5>
                                <div className="round">
                                    <input type="checkbox" id="mon" name="mon" value="mon"/>
                                    <label htmlFor="mon"></label>
                                </div>
                            </div>
                            <div className="container">
                                <h5>TUE</h5>
                                <div className="round">
                                    <input type="checkbox" id="tue" name="tue" value="tue"/>
                                    <label htmlFor="tue"></label>
                                </div>
                            </div>
                            <div className="container">
                                <h5>WED</h5>
                                <div className="round">
                                    <input type="checkbox" id="wed" name="wed" value="wed"/>
                                    <label htmlFor="wed"></label>
                                </div>
                            </div>
                            <div className="container">
                                <h5>THU</h5>
                                <div className="round">
                                    <input type="checkbox" id="thur" name="thur" value="thur"/>
                                    <label htmlFor="thur"></label>
                                </div>
                            </div>
                            <div className="container">
                                <h5>FRI</h5>
                                <div className="round">
                                    <input type="checkbox" id="fri" name="fri" value="fri"/>
                                    <label htmlFor="fri"></label>
                                </div>
                            </div>
                            <div className="container">
                                <h5>SAT</h5>
                                <div className="round">
                                    <input type="checkbox" id="sat" name="sat" value="sat"/>
                                    <label htmlFor="sat"></label>
                                </div>
                            </div>
                            <div className="container">
                                <h5>SUN</h5>
                                <div className="round">
                                    <input type="checkbox" id="sun" name="sun" value="sun"/>
                                    <label htmlFor="sun"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {errors.days && <p>{errors.days}</p>}

                </div>
                <div className="form-inputs">
                <div className="weekdays">
                     <div className="round">
                         <input type="checkbox" id="weekdays" name="weekdays" value="weekdays"
                         onChange={handleChange}/>
                        <label htmlFor="weekdays"></label>
                    </div>
                    <h5>Weekdays Only</h5>
                </div>
                </div>
                <button className="form-input-btn">Add +</button>
            </form>

        </div>
    )
}

export default FormSignup
