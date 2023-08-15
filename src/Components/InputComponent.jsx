
const InputComponent = ({placeHolder, inputType, labelValue}) => {



return(
    <div className="flex flex-col space-y-5">
        <label className="font-bold text-indigo-500">{labelValue}</label>
        <input className="border-b border-indigo-400 bg-transparent focus:outline-none" placeholder={placeHolder} type={inputType} ></input>
    </div>
)

}

export default InputComponent;