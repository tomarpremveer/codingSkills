import React from "react";
import styled from "@emotion/styled";

function Button({
    startIcon,
    endIcon,
    variant,
    disableShadow,
    color,
    size,
    text="Button 1"
}) {
    return (
        <CustomButton type="button" color="primary"  >{text} </CustomButton>
    )
}

const CustomButton = styled.button`
    background-color : ${props => (props.color === "primary" ? 'Blue' : 'black')}
`

export default Button;