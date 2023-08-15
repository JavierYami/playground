

const ButtonComponent = ({clickAction, buttonValue, buttonType}) => {

    return (
        <div className="text-center">
            <button className="rounded-md bg-indigo-400 px-2 py-1 transition hover:bg-indigo-500" onClick={clickAction} type={buttonType} >{buttonValue}</button>
        </div>
    )

}

export default ButtonComponent;