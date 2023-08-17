

const ButtonComponent = ({clickAction, buttonValue, buttonType, disabled}) => {

    return (
        <div className="text-center">
            <button className=" bg-primary px-2 py-1 transition text-softWhite hover:bg-primaryBlue  w-3/6 disabled: bg-primaryGrey" onClick={clickAction} type={buttonType} disabled={disabled}>{buttonValue}</button>
        </div>
    )

}

export default ButtonComponent;