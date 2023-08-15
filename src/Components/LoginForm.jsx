import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";


const LoginForm = () => {

    const [form, setForm] = useState({
        first_name: '',
        last_name:'',
        email:'',
        password:''
    });

    const handleOnChange = (event) => {
        const {name} = event.target;
        const {value} = event.target;

        setForm({
            ...form,
            [name] : value,
        })
    }
    
    return (

        <form className="flex flex-col p-10 space-y-8 space-y-10 rounded-xl h-fit shadow-xl shadow-indigo-600/30 bg-transparent w-full">
            <InputComponent  labelValue={"First Name"} onChange={handleOnChange} name={"first_name"} value={form.first_name}/>
            <InputComponent labelValue={"Last name"} onChange={handleOnChange} name={"last_name"} value={form.last_name}/>
            <InputComponent placeHolder={"Example@example.com"} labelValue={"Email or Username"} onChange={handleOnChange} inputType={"email"} name={"email"} value={form.email}/>
            <InputComponent inputType={"password"} labelValue={"Password"} onChange={handleOnChange} name={"password"} value={form.password}/>
            <ButtonComponent buttonValue={"Login"} buttonType={"submit"}/>
        </form>

    )
}

export default LoginForm;