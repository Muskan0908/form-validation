import React from 'react';
import './form.css';

const FormSuccess = ({submitForm,values}) => {
    
    return (
        <div>
            
            <table>
                <h2>Entries</h2>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Repeat</th>
                        <th>Shift</th>
                        <th>StartTime</th>
                        <th>EndTime</th>
                        <th>Days</th>
                    </tr>
                    <tr>
                        <td>{values.date}</td>
                        <td>{values.repeat}</td>
                        <td>{values.shift}</td>
                        <td>{values.startTime}</td>
                        <td>{values.endTime}</td>
                        

                        {(values.repeat!=="Daily")?
                        <td>{values.mon}&nbsp;
                            {values.tue}&nbsp;
                            {values.wed}&nbsp;
                            {values.thur}&nbsp;
                            {values.fri}&nbsp;
                            {values.sat}&nbsp;
                            {values.sun}&nbsp;
                        </td>:
                        
                        
                        <td>
                           {values.days}
                        </td>
                        
                        
                        }
                    
                    </tr>
                </tbody>
            </table>
            
            
            
            
            
            
            {console.log(values)}
            <button className="form-input-btn" onClick={submitForm}>Back</button>

        </div>
    )
}

export default FormSuccess
