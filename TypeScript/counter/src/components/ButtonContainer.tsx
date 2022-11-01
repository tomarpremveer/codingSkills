import React,{memo} from "react";

type ButtonProps = {
    updateState: React.Dispatch<React.SetStateAction<number>>
}
function ButtonContainer({ updateState }: ButtonProps) {
    const handleResetClick: () => void = () =>  {
        updateState(0)
    }
    const handleIncreaseClick: () => void = () =>  {
        updateState(prevState => prevState + 1)
    }
    const handleDecreaseClick: () => void = () =>  {
        updateState(prevState => prevState === 0 ? 0 : prevState - 1)
    }
    return (
        <div style={{
            display: "flex",
            padding: "4px",
            margin: "4px"
        }}
        >
            <button onClick={handleIncreaseClick}>Increase</button>
            <button onClick={handleDecreaseClick}>Decrease</button>
            <button onClick={handleResetClick}>Reset</button>
        </div>
    )
}

export default memo(ButtonContainer);