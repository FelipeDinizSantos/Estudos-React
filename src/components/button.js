import { useState } from "react";

const Button = (props)=>
{
    const [buttonText, setButtonText] = useState('Active');

    const handleChange = (text)=>
    {
        if(text !== 'Active') return 'Active';

        return 'Inactive';
    }

    return(
        <button onClick={()=>setButtonText(handleChange(buttonText))} className={props.class}>
            {buttonText}
        </button>
    );
}  

export default Button;