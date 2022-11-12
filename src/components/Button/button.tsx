import styled from "styled-components"
import React from "react"



interface Button {
    children: string 
    color?: string 
    backgroundColor?: string
    variant?: "text" | "contained" | "outlined"
    disable?: boolean
    disableElevation?: boolean
    fullWidth?: boolean
    type?: "submit"
    size?: "small" | "medium" | "large"
    state?: "success" | "error"
}

const Contained = styled.button<Button>`
    margin-top: 1vw;
    background-color:  ${props => props.backgroundColor ? props.backgroundColor : "#6200ee"};
	color: ${props => props.color ? props.color : "white"};
	border: none;
	outline: inherit;
    font-family: Arial, sans-serif;
    border-radius: 0.2vw;
    font-weight: 600;
    ${props => props.state == "success" ? "background-color: #2e7d32 !important; color: white !important;" : ""}
    ${props => props.state == "error" ? "background-color: #d32f2f !important; color: white !important;" : ""}
    ${props => props.fullWidth ? "width: 100% !important;": ""}
    ${props => props.disableElevation || props.disable ? "" : "box-shadow: 0vw 0vw 0.2vw black;"}
    ${props => props.size == "small" ?"padding: 0.4vw 0.8vw; font-size: 0.55vw; border-radius: 0.15vw;" : ""}
    ${props => props.size == "medium" ?"padding: 0.5vw 1vw; font-size: 0.7vw; border-radius: 0.2vw;" : ""}
    ${props => props.size == "large" ?"padding: 0.7vw 1.3vw; font-size: 0.8vw; border-radius: 0.3vw;" : ""}
    ${props => props.disable ?  "background-color: #e0e0e0 !important; color: #ababab !important;" : "cursor: pointer;"}
    transition: box-shadow 0.2s, opacity 0.2s;

    &:hover{
        ${props => props.disableElevation || props.disable ? "" : "box-shadow: 0vw 0.05vw 0.3vw black;"}
        opacity: 0.8;
        ${props => props.disable ?  "opacity: 1;" : ""}
    }
`

const Button = ({
        children, 
        color, 
        backgroundColor, 
        variant = "contained", 
        disable, 
        disableElevation, 
        fullWidth,
        type,
        size = "medium",
        state
    } : Button) : JSX.Element =>{

    return(<>

        { variant == "contained"
            ?
                <Contained
                    color = {color} 
                    backgroundColor = {backgroundColor}
                    variant = {variant}
                    disable = {disable}
                    disableElevation = {disableElevation}
                    fullWidth = {fullWidth}
                    type = {type}
                    size = {size}
                    state = {state}
                >
                    {children}
                </Contained>

            : null
        }
        

    </>
)}

export default Button