

const ButtonComponent = ({clickAction, buttonValue, buttonType, disabled}) => {

    return (
        <div className="text-center">
            <button className=" bg-primaryBlue px-2 py-1 transition text-softWhite hover:bg-selected  w-3/6 disabled:bg-primaryGrey disabled:cursor-not-allowed" onClick={clickAction} type={buttonType} disabled={disabled}>{buttonValue}</button>
        </div>
    )

}

export default ButtonComponent;