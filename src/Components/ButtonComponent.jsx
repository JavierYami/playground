

const ButtonComponent = ({clickAction, buttonValue}) => {


    return (
        <button onClick={clickAction}>{buttonValue}</button>
    )

}

export default ButtonComponent;