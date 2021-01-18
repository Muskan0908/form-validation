export default function validateInfo(values) {
    let errors = {};
    if(values.date===""){
        errors.date='Date required';
    }
    if(values.repeat===""){
        errors.repeat='Select Repeat Type ';
    }
    if(values.shift===""){
        errors.shift='Select Shift Time';
    }
    if(values.startTime===""){
        errors.startTime='Select Start Time';
    }
    else if(values.startTime<"05:00" || values.startTime>"09:00"){
        errors.startTime='Time should be within 5 to 9.'
    }
    
    if(values.endTime===""){
        errors.endTime='Select End Time';
    }
    else if(values.endTime<"05:00" || values.endTime>"09:00"){
        errors.endTime='Time should be within 5 to 9.'
    }
    else if(values.endTime<values.startTime){
        errors.endTime='Invalid Time'
    }
    if(values.repeat!=="Daily" && (values.mon==="" && values.tue==="" && values.wed==="" && values.thur===""
                            && values.fri==="" && values.sat==="" && values.sun==="")){
        errors.days='Days required';
    }
    return errors;
}  