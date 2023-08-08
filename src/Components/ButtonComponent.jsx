

const ButtonComponent = ({clickAction, buttonValue, buttonType}) => {

    return (
        <div className="text-center">
            <button className="rounded-md border px-2 py-1 transition hover:bg-stone-200" onClick={clickAction} type={buttonType} >{buttonValue}</button>
        </div>
    )

}

export default ButtonComponent;