import styled from 'styled-components'
import Ripple from './RippleAnimation'
import React, { useState, useRef} from 'react'

const RadioButtonElement = styled.div`
    display: flex;
`

interface RadioButtonType {
    sizeRadio: "small" | "medium" | "large"
    color?: string 
}

const RadioButton = styled.input<RadioButtonType>`
    -webkit-appearance: none;
    appearance: none;
    margin: auto;
    outline: none;
    border: 0.15vw solid grey;
    border-radius: 50%;
    display: flex;

    ${props => props.sizeRadio === "small" ?"width: 0.8vw; height: 0.8vw;" : ""}
    ${props => props.sizeRadio === "medium" ?"width: 1vw; height: 1vw;" : ""}
    ${props => props.sizeRadio === "large" ?"width: 1.2vw; height: 1.2vw;" : ""}

    @media (max-width: 480px) {
        ${props => props.sizeRadio === "small" ?"width: 3vw; height: 3vw;" : ""}
        ${props => props.sizeRadio === "medium" ?"width: 3.5vw; height: 3.5vw;" : ""}
        ${props => props.sizeRadio === "large" ?"width: 4vw; height: 4vw;" : ""}
        border: 0.4vw solid #808080;
    }

    ::after {
        content: "";
        display: block;
        border-radius: 50%;
        margin: auto;
        transform: scale(0);
        transition: transform 0.2s ease-in-out;
        background-color: ${props => props.color};

        ${props => props.sizeRadio === "small" ?"width: 0.3vw; height: 0.3vw;" : ""}
        ${props => props.sizeRadio === "medium" ?"width: 0.45vw; height: 0.45vw;" : ""}
        ${props => props.sizeRadio === "large" ?"width: 0.6vw; height: 0.6vw;" : ""}

        @media (max-width: 480px) {
            ${props => props.sizeRadio === "small" ?"width: 1.5vw; height: 1.5vw;" : ""}
            ${props => props.sizeRadio === "medium" ?"width: 2vw; height: 2vw;" : ""}
            ${props => props.sizeRadio === "large" ?"width: 2.3vw; height: 2.3vw;" : ""}
        }
    }
    :checked {
        border-color: ${props => props.color};
        
        ::after {
            transform: scale(1);
            
        }
    }

    :disabled {
        border-color: rgba(0,0,0,0.4);
        ::after {
            background-color: rgba(0,0,0,0.4);
            
        }
    }
`




interface RadioButtonLabelType{
    disabled?:boolean
}
const RadioButtonLabel = styled.label<RadioButtonLabelType>`
    color: ${ props => props.disabled ?'rgba(0,0,0,0.4)':'#1a2027'};
    ${ props => props.disabled ?'':'cursor: pointer;'};
    display: inline-block;
    text-transform: capitalize;
`


interface AnimationHoverType {
    isFocus: boolean
    disabled?: boolean
    color?: string
    size: "small" | "medium" | "large"
    checked: boolean
}

const AnimationHover = styled.span<AnimationHoverType>`
    border-radius: 50%;
    display: inline-flex;
    transition: background-color 0.1s;
    overflow: hidden;
    position: relative;
    ${props => props.isFocus ? `background-color: ${props.color}30;`:'' }

    ${props => props.size === "small" ?"width: 2vw; height: 2vw;" : ""}
    ${props => props.size === "medium" ?"width: 2.2vw; height: 2.2vw;" : ""}
    ${props => props.size === "large" ?"width: 2.4vw; height: 2.4vw;" : ""}

    &:hover{
        ${props => props.disabled ? '' : props.checked ? `background-color: ${props.color}10;` : 'background-color:#80808020;'  }
    }

    @media (max-width: 480px) {
        ${props => props.size === "small" ?"width: 7vw; height: 7vw;" : ""}
        ${props => props.size === "medium" ?"width: 7.5vw; height: 7.5vw;" : ""}
        ${props => props.size === "large" ?"width: 8vw; height: 8vw;" : ""}
    }
`

interface TextLabelType {
    size?: "small" | "medium" | "large"
}

const TextLabel = styled.span<TextLabelType>`
    font-family: Arial, sans-serif;
    text-transform: capitalize;
    display: inline-block;
    ${props => props.size === "small" ?"font-size: 0.55vw;" : ""}
    ${props => props.size === "medium" ?"font-size: 0.7vw;" : ""}
    ${props => props.size === "large" ?"font-size: 0.8vw;" : ""}

    @media (max-width: 480px) {
        ${props => props.size === "small" ?"font-size: 3vw;" : ""}
        ${props => props.size === "medium" ?"font-size: 3.5vw;" : ""}
        ${props => props.size === "large" ?"font-size: 4vw;" : ""}
    }
`

type HEX = `#${string}`


interface RadioType {
    label: string
    name: string
    id?: string
    value: string
    checked: string
    disabled?: boolean
    color?: HEX
    labelPosition?: 'left' | 'right'
    size?: "small" | "medium" | "large"
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio: React.FC<RadioType> = ({label, name , id, value, checked, onChange, disabled, color = '#6200ee', labelPosition = 'right', size = 'medium'}) =>{
    const [isFocus, setIsFocus] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    
    const resetBlurHandler = () =>{
        inputRef.current!.blur()
    }
    
    const checkedHandler = (checked: string ): boolean => {
        
        if( checked === value)
            return true
        return  false
   }


    return(<>
            <RadioButtonElement>

                <RadioButtonLabel 
                    htmlFor={id}
                    disabled={disabled}
                    onClick = {resetBlurHandler} 
                >
                    {labelPosition === 'left' &&
                        <TextLabel 
                            size={size}
                        >
                            {label}
                        </TextLabel>
                     }
                    <AnimationHover 
                        isFocus ={isFocus}
                        disabled={disabled}
                        color={color}
                        size={size}
                        checked={checkedHandler(checked)}
                    >
                        <RadioButton 
                            ref = {inputRef}
                            type="radio"
                            id={id}
                            name={name}
                            value ={value}
                            onChange={onChange}
                            checked={checkedHandler(checked)}
                            disabled={disabled}
                            color={color}
                            sizeRadio={size}
                            onFocus = {() => setIsFocus(true) }
                            onBlur = {() => setIsFocus(false)}
                            onMouseUp ={() =>setIsFocus(false)}
                        />
                    
                        { disabled !== true && 
                            <Ripple backgroundColor={color} />  
                        }
                    </AnimationHover>
                    {labelPosition === 'right' &&
                        <TextLabel
                            size={size}
                        >
                            {label}
                        </TextLabel>
                     }
                </RadioButtonLabel>
            </RadioButtonElement>
    </>
)}

export default Radio