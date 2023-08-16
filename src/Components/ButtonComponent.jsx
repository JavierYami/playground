

const ButtonComponent = ({clickAction, buttonValue, buttonType, disabled}) => {

    return (
        <div className="text-center">
            <button className="rounded-md bg-indigo-400 px-2 py-1 transition hover:bg-indigo-500 font-bold text-indigo-600 disabled:bg-gray-400 text-gray-500" onClick={clickAction} type={buttonType} disabled={disabled}>{buttonValue}</button>
        </div>
    )

}

export default ButtonComponent;