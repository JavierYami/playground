
const InputComponent = ({placeHolder, inputType, labelValue}) => {



return(
    <div className="flex flex-col space-y-5">
        <label>{labelValue}</label>
        <input placeholder={placeHolder} type={inputType} ></input>
    </div>
)

}

export default InputComponent;