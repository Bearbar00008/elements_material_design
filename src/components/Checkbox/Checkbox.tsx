import styled from "styled-components"
import React, { useRef, useState } from "react"
import { RippleAnimationCenter } from "./../utils"


interface CheckboxWrapperType{
    fullWidth?: boolean
}

const CheckboxWrapper = styled.div<CheckboxWrapperType>`
    display: flex;
    ${props => props.fullWidth ? 'width: 100%;' : ''}
`

interface CheckboxLabelType {
    disabled?: boolean
}

const CheckboxLabel = styled.label<CheckboxLabelType>`
    display: inline-flex;
    position: relative;
    width: inherit;
    ${props => props.disabled ? '' : 'cursor: pointer;' }
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

const CheckboxElement = styled.input`
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
`

interface CheckedType {
    checked: boolean
    color: string
    disabled?: boolean
    size?: "small" | "medium" | "large"
}

const Checked = styled.div<CheckedType>`
    margin: auto;
    border: 0.15vw solid ${props => props.checked ? props.color : 'grey'};
    ${props => props.checked ? `background-color: ${props.color}; `: 'background-color: #eee00;'}
    ${props => props.disabled && props.checked === false ? 'border-color: rgba(0,0,0,0.4) !important;': ''}
    ${props => props.disabled && props.checked === true ? 'background-color: rgba(0,0,0,0.4) !important; border-color: rgba(0,0,0,0) !important;' : ''}

    ${props => props.size === "small" ?"width: 0.3vw; height: 0.3vw;" : ""}
    ${props => props.size === "medium" ?"width: 0.5vw; height: 0.5vw;" : ""}
    ${props => props.size === "large" ?"width: 0.7vw; height: 0.7vw;" : ""}

    transition: background-color 0.2s;

    @media (max-width: 480px) {
        ${props => props.size === "small" ?"width: 2.5vw; height: 2.5vw;" : ""}
        ${props => props.size === "medium" ?"width: 3vw; height: 3vw;" : ""}
        ${props => props.size === "large" ?"width: 3.5vw; height: 3.5vw;" : ""}
        border: 0.4vw solid #808080;
    }
`

interface AnimationHoverType {
    isFocus: boolean
    disabled?: boolean
    color?: string
    size?: "small" | "medium" | "large"
    checked?: boolean
}

const AnimationHover = styled.span<AnimationHoverType>`
    border-radius: 50%;
    display: inline-flex;
    transition: background-color 0.1s;
    overflow: hidden;
    position: relative;
  
    ${props => props.isFocus && props.disabled !== true ? `background-color: ${props.color}30;`:'' }

    ${props => props.size === "small" ?"width: 2vw; height: 2vw;" : ""}
    ${props => props.size === "medium" ?"width: 2.2vw; height: 2.2vw;" : ""}
    ${props => props.size === "large" ?"width: 2.4vw; height: 2.4vw;" : ""}

    &:hover{
        ${props => props.disabled ? '' : props.checked ? `background-color: ${props.color}10;` : 'background-color:#80808020;' }
    }

    @media (max-width: 480px) {
        ${props => props.size === "small" ?"width: 10vw; height: 10vw;" : ""}
        ${props => props.size === "medium" ?"width: 10.5vw; height: 10.5vw;" : ""}
        ${props => props.size === "large" ?"width: 11vw; height: 11vw;" : ""}
    }
`

interface TextLabelType {
    size?: "small" | "medium" | "large"
    disabled?: boolean
    fullWidth?: boolean
    labelPosition?: 'left' | 'right'
}

const TextLabel = styled.span<TextLabelType>`
    font-family: Arial, sans-serif;
    color: ${props => props.disabled ? 'rgba(0,0,0,0.4)':'#1a2027'};
    text-transform: capitalize;
    display: inline-block;
    ${props => props.fullWidth ? `margin: auto ${props.labelPosition === 'right' ? '0vw' : 'auto' } auto ${props.labelPosition === 'left' ? '0vw' : 'auto' };` : 'margin: auto;'}

    ${props => props.size === "small" ?"font-size: 0.55vw;" : ""}
    ${props => props.size === "medium" ?"font-size: 0.7vw;" : ""}
    ${props => props.size === "large" ?"font-size: 0.8vw;" : ""}

    @media (max-width: 480px) {
        ${props => props.size === "small" ?"font-size: 3vw;" : ""}
        ${props => props.size === "medium" ?"font-size: 3.5vw;" : ""}
        ${props => props.size === "large" ?"font-size: 4vw;" : ""}
    }
`
    
const CheckSvg = styled.svg`
    position: absolute;
    width: inherit;
    height: inherit;
        display: inline-block;
    & path {
        stroke: white;
        stroke-width: 2px;
        fill: white; 
      }
`

type HEX = `#${string}`

interface CheckboxType {
    label: string
    name: string
    id?: string
    value: string
    checked: string []
    disabled?: boolean
    color?: HEX
    labelPosition?: 'left' | 'right'
    size?: "small" | "medium" | "large"
    fullWidth?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<CheckboxType> = ({label, name , id, value, checked, onChange, disabled, color = '#6200ee', labelPosition = 'right', size = 'medium', fullWidth}) =>{
    
    const [isFocus, setIsFocus] = useState<boolean>(false)
    const checkBoxRef = useRef<HTMLInputElement>(null)
    

    const checkedHandler = (checked: string []): boolean => {
        
        const isChecked = checked.reduce(
            (accumulator, currentValue) =>  accumulator === false ? currentValue === value : accumulator,
            false
        )

        return isChecked
   }
    

    const resetBlurHandler = () =>{

        checkBoxRef.current!.blur()

    }

    return(<>
            <CheckboxWrapper
                fullWidth={fullWidth}
            >
                <CheckboxLabel 
                    onClick={resetBlurHandler}
                    disabled={disabled}
                >

                    { labelPosition === 'left' && 
                        <TextLabel
                            size={size}
                            disabled ={disabled}
                            fullWidth ={fullWidth}
                            labelPosition={labelPosition}
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

                        <CheckboxElement 
                            type='checkbox'
                            ref={checkBoxRef} 
                            onChange={onChange}
                            id={id}
                            name ={name}
                            value ={value}
                            checked = {checkedHandler(checked)} 
                            onFocus = {() => setIsFocus(true) }
                            onBlur = {() => setIsFocus(false)}
                            disabled ={disabled}
                        />

                        <Checked 
                            checked = {checkedHandler(checked)} 
                            color ={color}
                            disabled={disabled}
                            size = {size}
                        />

                        {checkedHandler(checked) === true &&
                            <CheckSvg viewBox="0 -32 47 110">
                                <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"/>
                            </CheckSvg>
                         }
                    

                        { disabled !== true && 
                            <RippleAnimationCenter backgroundColor={checkedHandler(checked) === true ? '#000000' : color } />  
                        }

                    </AnimationHover>

                    
                    { labelPosition === 'right' && 
                        <TextLabel
                            size={size}
                            disabled ={disabled}
                            fullWidth ={fullWidth}
                            labelPosition={labelPosition}
                        >
                            {label}
                        </TextLabel>
                    }

                </CheckboxLabel>    
            </CheckboxWrapper>
    </>
)}

export default Checkbox