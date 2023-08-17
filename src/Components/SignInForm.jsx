import { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import { validation } from "../Utils/Validation";
import { postUser } from "../Utils/postUser";


const SignInForm = () => {


    const [isDisabled, setIsDisabled] = useState(true);

    const [userInfo, setUserInfo] = useState({
        first_name: '',
        last_name:'',
        email:'',
        password:''
    });

    const [errors, setErrors] = useState({
        first_name:'',
        last_name:'',
        email:'',
        password:'',
    });

    const handleOnChange = (event) => {
        const {name} = event.target;
        const {value} = event.target;

        setUserInfo({
            ...userInfo,
            [name] : value,
        })

        setErrors(validation({...userInfo,[name]:value}));

    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!Object.keys(errors).length>0){

            postUser(userInfo);
            
            setUserInfo({
                first_name: '',
                last_name:'',
                email:'',
                password:''
            });
        };
    };

    useEffect(()=>{
        if(!Object.keys(errors).length>0) setIsDisabled(false);
        else setIsDisabled(true);
    },[errors])

    return (

        <form className="flex flex-col p-10 space-y-8 space-y-10 rounded-xl h-fit shadow-xl shadow-indigo-600/30 bg-transparent w-full" onSubmit={handleSubmit}>
            <InputComponent  labelValue={"First Name"} onChange={handleOnChange} name={"first_name"} value={userInfo.first_name} errorMessage={errors.first_name}/>
            <InputComponent labelValue={"Last name"} onChange={handleOnChange} name={"last_name"} value={userInfo.last_name} errorMessage={errors.last_name}/>
            <InputComponent placeHolder={"Example@example.com"} labelValue={"Email or Username"} onChange={handleOnChange} inputType={"email"} name={"email"} value={userInfo.email} errorMessage={errors.email}/>
            <InputComponent inputType={"password"} labelValue={"Password"} onChange={handleOnChange} name={"password"} value={userInfo.password} errorMessage={errors.password}/>
            <ButtonComponent buttonValue={"Login"} buttonType={"submit"} disabled={isDisabled}/>
        </form>

    )
}

export default SignInForm;