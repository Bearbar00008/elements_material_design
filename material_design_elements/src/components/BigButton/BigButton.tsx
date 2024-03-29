import styled  from "styled-components"
import React, { useState } from "react"
import {RippleAnimation, Loading} from "../utils"

interface ButtonContainerType{
    fullWidth?: boolean
}

const ButtonContainer = styled.div<ButtonContainerType>`
    border-radius: 0.3vw;
    display: inline-block;
    background-color: white;
    ${props => props.fullWidth ? "width: 100% !important;": ""}

    @media (max-width: 480px) {
        border-radius: 0.7vw;
    }
`
interface ButtonStyled {
    color?: string 
    backgroundColor?: string
    variant?: "text" | "contained" | "outlined"
    disable?: boolean
    disableElevation?: boolean
    fullWidth?: boolean
    type?: "submit" | 'button'
    size?: "small" | "medium" | "large"
    state?: "success" | "error"
    isFocus: boolean
    isClicked: boolean
    loadingPhase?: boolean
}

const Contained = styled.button<ButtonStyled>`
    border-radius: 0.3vw;
    overflow: hidden;   
    background-color:  ${props => props.backgroundColor ? props.backgroundColor : "#6200ee"};
	color: ${props => props.color ? props.color : "white"};
	border: none;
	outline: inherit;
    font-family: Arial, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    opacity: ${props => props.isFocus && props.disable !== true ? "0.8" : "1"};
    ${props => props.state === "success" ? "background-color: #2e7d32 !important; color: white !important;" : ""}
    ${props => props.state === "error" ? "background-color: #d32f2f !important; color: white !important;" : ""}
    ${props => props.fullWidth ? "width: 100% !important;": ""}
    ${props => props.disableElevation || props.disable || props.loadingPhase ? "" : `box-shadow: 0vw 0vw ${props.isClicked ? "13px" : "5px" } black;`}
    ${props => props.size === "small" ?"padding: 0.842vw 2.404vw; font-size: 0.842vw;" : ""}
    ${props => props.size === "medium" ?"padding: 1.042vw 2.604vw; font-size: 1.042vw;" : ""}
    ${props => props.size === "large" ?"padding: 1.242vw 2.804vw; font-size: 1.242vw;" : ""}
    ${props => props.disable || props.loadingPhase ?  "background-color: #e0e0e0 !important; color: #ababab !important;" : "cursor: pointer;"}
    transition: box-shadow 0.2s, opacity 0.2s;

    &:hover{
        ${props => props.disableElevation || props.disable || props.loadingPhase ? "" : `box-shadow: 0vw 1px ${props.isClicked ? "13px" : "6px" } black;`}
        opacity: 0.8;
        ${props => props.disable ?  "opacity: 1;" : ""}
    }

    @media (max-width: 480px) {
        ${props => props.size === "small" ?"padding: 2vw 4vw; font-size: 3vw;" : ""}
        ${props => props.size === "medium" ?"padding: 2.5vw 5vw; font-size: 3.5vw;" : ""}
        ${props => props.size === "large" ?"padding: 3vw 6vw; font-size: 4vw" : ""}
        border-radius: 0.7vw;
    }
`
const Text = styled.button<ButtonStyled>`
    border-radius: 0.3vw;
    overflow: hidden;
	color: ${props => props.color ? props.color : "#6200ee"};
    background-color: ${props => props.isFocus ? props.backgroundColor ? `${props.backgroundColor}30 !important` : "#6200ee30 !important" : "#6200ee00" };
	border: none;
	outline: inherit;
    font-family: Arial, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    ${props => props.state === "success" ? "color: #2e7d32 !important;" : ""}
    ${props => props.state === "success" && props.isFocus ? "background-color: #2e7d3230 !important;" : "background-color: #6200ee00;" }
    ${props => props.state === "error" ? "color: #d32f2f !important;" : ""}
    ${props => props.state === "error" && props.isFocus ? "background-color: #d32f2f30 !important;" : "background-color: #6200ee00;" }
    ${props => props.fullWidth ? "width: 100% !important;": ""}
    ${props => props.size === "small" ?"padding: 0.842vw 2.404vw; font-size: 0.842vw;" : ""}
    ${props => props.size === "medium" ?"padding: 1.042vw 2.604vw; font-size: 1.042vw;" : ""}
    ${props => props.size === "large" ?"padding: 1.242vw 2.804vw; font-size: 1.242vw;" : ""}
    ${props => props.disable || props.loadingPhase ?  "color: #ababab !important; background-color: #6200ee00 !important;" : "cursor: pointer;"}
    transition: background-color 0.5s;

    &:hover{
        ${props => props.disable || props.state !== undefined ?  "" : `background-color: ${props.backgroundColor ? `${props.backgroundColor}20` : "#6200ee30" };`}
        ${props => props.state === 'success' && props.disable !== true  ?  "background-color: #2e7d3220;" : ""}
        ${props => props.state ==='error' && props.disable !== true  ?  "background-color: #d32f2f20;" : ""}
    }

    @media (max-width: 480px) {
        ${props => props.size === "small" ?"padding: 2vw 4vw; font-size: 3vw;" : ""}
        ${props => props.size === "medium" ?"padding: 2.5vw 5vw; font-size: 3.5vw;" : ""}
        ${props => props.size === "large" ?"padding: 3vw 6vw; font-size: 4vw" : ""}
        border-radius: 0.7vw;
    }
`

const Outlined = styled.button<ButtonStyled>`
    border-radius: 0.3vw;
    overflow: hidden;
	color: ${props => props.color ? props.color : "#6200ee"};
    background-color: ${props => props.isFocus ? props.backgroundColor ? `${props.backgroundColor}30 !important` : "#6200ee30 !important" : "#6200ee00" };
    border: 0.15vw solid  ${props => props.backgroundColor ? `${props.backgroundColor}` : "#6200ee" };
	outline: inherit;
    font-family: Arial, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    ${props => props.state === "success" ? "color: #2e7d32 !important; border-color: #2e7d32;"  : ""}
    ${props => props.state === "success" && props.isFocus ? "background-color: #2e7d3230 !important;" : "background-color: #6200ee00;" }
    ${props => props.state === "error" ? "color: #d32f2f !important; border-color: #d32f2f;" : ""}
    ${props => props.state === "error" && props.isFocus ? "background-color: #d32f2f30 !important;" : "background-color: #6200ee00;" }
    ${props => props.fullWidth ? "width: 100% !important;": ""}
    ${props => props.size === "small" ?"padding: 0.842vw 2.404vw; font-size: 0.842vw;" : ""}
    ${props => props.size === "medium" ?"padding: 1.042vw 2.604vw; font-size: 1.042vw;" : ""}
    ${props => props.size === "large" ?"padding: 1.242vw 2.804vw; font-size: 1.242vw;" : ""}
    ${props => props.disable || props.loadingPhase ?  "color: #ababab !important; background-color: #6200ee00 !important; border-color: #ababab !important;" : "cursor: pointer;"}
    transition: background-color 0.5s;

    &:hover{
        ${props => props.disable || props.state !== undefined ?  "" : `background-color: ${props.backgroundColor ? `${props.backgroundColor}20` : "#6200ee30" };`}
        ${props => props.state === 'success' && props.disable !== true  ?  "background-color: #2e7d3220;" : ""}
        ${props => props.state ==='error' && props.disable !== true  ?  "background-color: #d32f2f20;" : ""}
    }

    @media (max-width: 480px) {
        ${props => props.size === "small" ?"padding: 2vw 4vw; font-size: 3vw;" : ""}
        ${props => props.size === "medium" ?"padding: 2.5vw 5vw; font-size: 3.5vw;" : ""}
        ${props => props.size === "large" ?"padding: 3vw 6vw; font-size: 4vw" : ""}
        border-radius: 0.7vw;
    }
`

interface TextButton {
    loadingPhase?: boolean
}

const TextButton = styled.span<TextButton>`
   visibility: ${props => props.loadingPhase ? "hidden" : "visible"};
`


interface ButtonElement {
    children: string 
    color?: string 
    backgroundColor?: string
    variant?: "text" | "contained" | "outlined"
    disable?: boolean
    disableElevation?: boolean
    fullWidth?: boolean
    type?: "submit" | 'button'
    size?: "small" | "medium" | "large"
    state?: "success" | "error"
    loadingPhase?: boolean
    onClick?: () => void
}

const BigButton: React.FC<ButtonElement> = ({
        children, 
        color, 
        backgroundColor, 
        variant = "contained", 
        disable, 
        disableElevation, 
        fullWidth,
        type,
        size = "medium",
        state,
        loadingPhase,
        onClick
    })  =>{

        const [isClicked, setIsClicked] = useState<boolean>(false)
        const [isFocus, setIsFocus] = useState<boolean>(false)
        
        return(<>
            <ButtonContainer fullWidth = {fullWidth}>
                { variant === "contained" &&
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
                        isFocus = {isFocus}
                        isClicked = {isClicked}
                        loadingPhase = {loadingPhase} 
                        onClick={ disable === true  || loadingPhase === true ? () => null : onClick }
                        onFocus = {() => setIsFocus(true) }
                        onBlur = {() => setIsFocus(false)}
                        onMouseDown = {() => setIsClicked(true)} 
                        onMouseUp = {() => {setIsClicked(false); setIsFocus(false)}}
                        >
                            <TextButton loadingPhase ={loadingPhase}>{children}</TextButton>
                            {loadingPhase  &&
                                    <Loading color="white" />    
                                }
                            
                            { disable !== true && loadingPhase !== true && 
                                <RippleAnimation backgroundColor="white" />
                            }
                            
                        </Contained>
                }

                { variant === "text" &&
                        <Text
                        color = {color} 
                        backgroundColor = {backgroundColor}
                        variant = {variant}
                        disable = {disable}
                        disableElevation = {disableElevation}
                        fullWidth = {fullWidth}
                        type = {type}
                        size = {size}
                        state = {state}
                        isFocus = {isFocus}
                        isClicked = {isClicked}
                        loadingPhase = {loadingPhase} 
                        onClick={ disable === true  || loadingPhase === true ? () => null : onClick }
                        onFocus = {() => setIsFocus(true) }
                        onBlur = {() => setIsFocus(false)}
                        onMouseDown = {() => {setIsClicked(true)}}
                        onMouseUp = {() => {setIsClicked(false); setIsFocus(false)}}
                        >
                            <TextButton loadingPhase = {loadingPhase} >{children}</TextButton>
                            {loadingPhase  &&
                                <Loading color="#ababab" />    
                            }
                            { disable !== true && loadingPhase !== true && 
                                <RippleAnimation backgroundColor={state ? state === 'success' ? '#2e7d32': '#d32f2f' : backgroundColor} />
                            }
                        </Text>
                }


                { variant === "outlined" && 
                        <Outlined
                        color = {color} 
                        backgroundColor = {backgroundColor}
                        variant = {variant}
                        disable = {disable}
                        disableElevation = {disableElevation}
                        fullWidth = {fullWidth}
                        type = {type}
                        size = {size}
                        state = {state}
                        loadingPhase = {loadingPhase}
                        isFocus = {isFocus}
                        isClicked = {isClicked}
                        onClick={ disable === true  || loadingPhase === true ? () => null : onClick }
                        onFocus = {() => setIsFocus(true) }
                        onBlur = {() => setIsFocus(false)}
                        onMouseDown = {() => {setIsClicked(true)}}
                        onMouseUp = {() => {setIsClicked(false); setIsFocus(false)}}
                        >
                            <TextButton loadingPhase = {loadingPhase} >{children}</TextButton>
                            {loadingPhase  &&
                                <Loading color="#ababab" />    
                            }
                            { disable !== true && loadingPhase !== true && 
                                <RippleAnimation backgroundColor={state ? state === 'success' ? '#2e7d32': '#d32f2f' : backgroundColor} />
                            }
                        </Outlined>
                }   
            </ButtonContainer>
        </>
)}

export default BigButton