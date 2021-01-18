import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    date: '',
    repeat: '',
    shift: '',
    startTime: '',
    endTime:'',
    days:[],
    weekdays:''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const [copy,setCopy]=useState([]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(errors);
    
    setCopy([...copy,values]);
    if(values.repeat==="Daily" && values.weekdays===""){
      setValues({
        ...values,
        "days":"[mon,tue,wed,thurs,fri,sat,sun]"

      })
    }
    else{
      setValues({
        ...values,
        "days":"[mon,tue,wed,thurs,fri]",
        "sat":"",
        "sun":""
      })
    }
    console.log(values);
  }
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      };
      console.log(values);
      let a=document.getElementById("mon");
      let b=document.getElementById("tue");
      let c=document.getElementById("wed");
      let d=document.getElementById("thur");
      let e=document.getElementById("fri");
      let f=document.getElementById("sat");
      let g=document.getElementById("sun");
      let h=document.getElementById("weekdays");


      if(values.repeat==="Daily"){
        a.checked=true;
        b.checked=true;
        c.checked=true;
        d.checked=true;
        e.checked=true;
        f.checked=true;
        g.checked=true;
        
    }
    
    if( values.weekdays==="weekdays" && h.checked){
        f.disabled=true;
        f.checked=false;
        g.disabled=true;
        g.checked=false;
    }
    if(values.weekdays==="weekdays" && !h.checked){
      f.disabled=false;
      g.disabled=false;
    }

    
    },
    [values,errors]
  );
  return { handleChange ,handleSubmit, errors,values};
}
export default useForm;
