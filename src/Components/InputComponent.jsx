
const InputComponent = ({placeHolder, inputType, labelValue, onChange, name, value, errorMessage}) => {



return(
    <div className="flex flex-col space-y-1">
        <label className="font-bold text-sm text-indigo-500">{labelValue}</label>
        <input className="border-b border-indigo-400 bg-transparent focus:outline-none text-indigo-400" placeholder={placeHolder} type={inputType || 'text'} onChange={onChange} name={name} value={value} ></input>
        <p className="text-xs text-pink-600">{errorMessage}</p>
    </div>
)

}

export default InputComponent;