import { useState } from "react";

const Form = ()=>
{
    const [formInfos, setFormInfos] = useState(
    {
        name: ''
    })

    const handleChange = (input)=>
    {
        setFormInfos({...formInfos, name: input.value});
    }


    return(
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <label>Nome: </label>
            <input 
                type="text" 
                name="name" 
                value={formInfos.name} 
                onChange={(e)=>handleChange(e.target)}
            />
            <p>Nome digitado: {formInfos.name}</p>
        </form>
    );
}

export default Form;