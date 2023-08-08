import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";


const LoginForm = () => {

    const handleClick = () => {
    }

    return (

        <form className="flex flex-col p-10 space-y-8 space-y-10 border-t rounded-xl h-fit shadow-xl">
            <InputComponent placeHolder={"Example@example.com"} labelValue={"Email or Username"}/>
            <InputComponent inputType={"password"} labelValue={"Password"}/>
            <ButtonComponent buttonValue={"Login"} clickAction={handleClick} buttonType={"submit"}/>
        </form>

    )
}

export default LoginForm;