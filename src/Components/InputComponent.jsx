
const InputComponent = ({placeHolder, inputType, labelValue}) => {



return(
    <div className="flex flex-col space-y-5">
        <label>{labelValue}</label>
        <input className="border-b focus:outline-none invalid:border-pink-500" placeholder={placeHolder} type={inputType} ></input>
    </div>
)

}

export default InputComponent;