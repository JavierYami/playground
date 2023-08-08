

const ButtonComponent = ({clickAction, buttonValue, buttonType}) => {

    return (
        <div className="text-center">
            <button onClick={clickAction} type={buttonType} >{buttonValue}</button>
        </div>
    )

}

export default ButtonComponent;