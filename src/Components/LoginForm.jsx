import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";


const LoginForm = () => {

    const handleClick = () => {
        alert('Clicaste pa');
    }

    return (

        <form>
            <h1>Log In</h1>
            <label>Email or username</label>
            <InputComponent placeHolder={"Example@example.com"}/>
            <label>Password</label>
            <InputComponent inputType={"password"}/>
            <ButtonComponent buttonValue={"Login"} clickAction={handleClick}/>
        </form>

    )
}

export default LoginForm;