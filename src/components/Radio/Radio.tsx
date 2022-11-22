import styled from 'styled-components'
import React from 'react'
import Ripple from './RippleAnimation'
import { useState, useRef} from 'react'

const RadioButtonElement = styled.div`
    display: flex;
`

interface RadioButtonType {
    color?: string
}

const RadioButton = styled.input<RadioButtonType>`
    -webkit-appearance: none;
    appearance: none;
    margin: auto;
    outline: none;
    width: 1vw;
    height: 1vw;
    border: 0.15vw solid grey;
    border-radius: 50%;
    display: flex;
    ::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 0.5vw;
        height: 0.5vw;
        margin: auto;
        transform: scale(0);
        transition: transform 0.2s ease-in-out;
        background-color: ${props => props.color};
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
    font-size: 0.938vw;
    color: ${ props => props.disabled ?'rgba(0,0,0,0.4)':'#1a2027'};
    margin-left: 0.521vw !important;
    margin-top: -0.15vw;
    ${ props => props.disabled ?'':'cursor: pointer;'};
    display: inline-block;
    text-transform: capitalize;
`


interface AnimationHoverType {
    isFocus: boolean
    disabled?: boolean
    color?: string
}

const AnimationHover = styled.span<AnimationHoverType>`
    width: 2.2vw;
    height: 2.2vw;
    border-radius: 50%;
    display: inline-flex;
    transition: background-color 0.1s;
    overflow: hidden;
    position: relative;
    ${props => props.isFocus ? `background-color: ${props.color}30;`:'' }
    &:hover{
        ${props => props.disabled ? '' : `background-color: ${props.color}10;` }
        
    }
`

type HEX = `#${string}`


interface RadioType {
    label: string
    name: string
    id: string
    value?: string
    checked?: boolean
    disabled?: boolean
    color?: HEX
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio: React.FC<RadioType> = ({label, name , id, value, checked, onChange, disabled, color = '#6200ee'}) =>{
    const [isFocus, setIsFocus] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    console.log(color);
    
    const resetBlurHandler = () =>{
        inputRef.current!.blur()
    }
    
    return(<>
            <RadioButtonElement>

                <RadioButtonLabel 
                    htmlFor={id}
                    disabled={disabled}
                    onClick = {resetBlurHandler} 
                >

                    <AnimationHover 
                        isFocus ={isFocus}
                        disabled={disabled}
                        color={color}
                    >
                        <RadioButton 
                            ref = {inputRef}
                            type="radio"
                            id={id}
                            name={name}
                            value ={value}
                            onChange={onChange}
                            checked={checked}
                            disabled={disabled}
                            color={color}
                            onFocus = {() => setIsFocus(true) }
                            onBlur = {() => setIsFocus(false)}
                            onMouseUp ={() =>setIsFocus(false)}
                        />
                    
                        { disabled !== true && 
                            <Ripple backgroundColor={color} />  
                        }
                    </AnimationHover>
                    <span>{label}</span>
                </RadioButtonLabel>
            </RadioButtonElement>
    </>
)}

export default Radio