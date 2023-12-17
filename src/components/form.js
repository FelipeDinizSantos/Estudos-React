import { useState } from "react";

const Form = ()=>
{
    const [form, setForm] = useState(
    {
        name: '',
        password: ''
    })

    const handleFormChange = event=>
    {
        setForm(
            {
                ...form,
                [event.target.name]: event.target.value
            });
    }

    const handleSubmit = event=>
    {
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>

            <label>Nome: </label>
            <input 
                type="text" 
                name="name" 
                value={form.name} 
                onChange={handleFormChange}
            />
            <label>Senha: </label>
            <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleFormChange}
            />

            <p>
                nome: {form.name}
            </p>
            <p>
                senha: {form.password}
            </p>
        </form>
    );
}

export default Form;