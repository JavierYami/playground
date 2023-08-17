
const InputComponent = ({placeHolder, inputType, labelValue, onChange, name, value, errorMessage}) => {



return(
    <div className="flex flex-col space-y-1">
        <label className="font-bold text-sm text-primary">{labelValue}</label>
        <input className="border-b border-secondary bg-transparent focus:outline-none text-secondary" placeholder={placeHolder} type={inputType || 'text'} onChange={onChange} name={name} value={value} ></input>
        <p className="text-xs text-warning">{errorMessage}</p>
    </div>
)

}

export default InputComponent;