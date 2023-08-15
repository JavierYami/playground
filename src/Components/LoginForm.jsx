import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";


const LoginForm = () => {

    const handleClick = () => {
    }

    return (

        <form className="flex flex-col p-10 space-y-8 space-y-10 rounded-xl h-fit shadow-xl shadow-indigo-600/30 bg-indigo-300 w-full">
            <InputComponent  labelValue={"First Name"}/>
            <InputComponent labelValue={"Last name"}/>
            <InputComponent placeHolder={"Example@example.com"} labelValue={"Email or Username"}/>
            <InputComponent inputType={"password"} labelValue={"Password"}/>
            <ButtonComponent buttonValue={"Login"} clickAction={handleClick} buttonType={"submit"}/>
        </form>

    )
}

export default LoginForm;