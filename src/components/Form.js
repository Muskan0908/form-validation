import React,{ useState } from 'react';
import FormSignup from "./FormSignup";
import FormSuccess from './FormSuccess';


const Form = () => {
    const [isSubmitted,setIsSubmitted]=useState(false);
    const[ copy,setCopy]=useState({});
    const submitForm=()=>{
        setIsSubmitted(!isSubmitted);
        console.log(copy);
    }
    return (
        <div>
            
            {!isSubmitted?
                (<FormSignup submitForm={submitForm} setCopy={setCopy} />):
                (<FormSuccess submitForm={submitForm} values={copy}/>)
            }
            
        </div>
    )
}

export default Form
