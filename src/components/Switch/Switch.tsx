import styled from 'styled-components'
import React, { useRef, useState } from 'react'
import { RippleAnimationCenter } from "../utils"

interface SwitchWrapperType{
    fullWidth?: boolean
}

const SwitchWrapper = styled.div<SwitchWrapperType>`
    display: inline-block;
    ${props => props.fullWidth ? 'width: 100%;' : ''}
`

interface SwitchLabelType{
    disabled?: boolean
}

const SwitchLabel = styled.label<SwitchLabelType>`
    display: flex;
    ${ props => props.disabled  ? '' : 'cursor: pointer;'}
   
`

const SwitchInput = styled.input`
    appearance: none;
    position: absolute;
`

const SwitchElement = styled.div`
    position: relative;
`
interface SwitchBallType{
    color: string
    checked: boolean
    disabled?: boolean
    size?: "small" | "medium" | "large"
}

const SwitchBall = styled.span<SwitchBallType>`
    margin: auto;
    width: 1vw;
    height: 1vw;
    background-color: ${props => props.checked ? props.color : 'white;'};
    border-radius: 50%;
    box-shadow: 0vw 0vw 3px black;
    ${ props => props.disabled ? 'opacity: 0.8;' : ''}

    ${props => props.size === "small" ?"width: 0.8vw; height: 0.8vw;" : ""}
    ${props => props.size === "medium" ?"width:  1vw; height: 1vw;" : ""}
    ${props => props.size === "large" ?"width: 1.2vw; height: 1.2vw;" : ""}

    @media (max-width: 480px) {
        ${props => props.size === "small" ?"width: 4vw; height: 4vw;" : ""}
        ${props => props.size === "medium" ?"width:  5.5vw; height: 5.5vw;" : ""}
        ${props => props.size === "large" ?"width: 6.5vw; height: 6.5vw;" : ""}
    }
`
interface AnimationHoverType{
    checked: boolean
    isFocus: boolean
    disabled?: boolean
    color: string
    size?: "small" | "medium" | "large"
}

const AnimationHover = styled.div<AnimationHoverType>`

    overflow: hidden;
    border-radius: 50%;
    display: flex;
    position: absolute;
    top: -0.9vw;
    
    transition: transform 0.4s, background-color 0.4s;
    z-index:2;
    ${props => props.isFocus && props.disabled !== true ? props.checked ? `background-color: ${props.color}30; !important` : 'background-color: #80808030 !important':'' }

    ${props => props.size === "small" ?`width: 2vw; height: 2vw; top: -0.75vw; transform: translate(${props.checked ? '0.7vw' : '-0.7vw' }, 0vw); ` : ""}
    ${props => props.size === "medium" ?`width: 2.2vw; height: 2.2vw; top: -0.8vw; transform: translate(${props.checked ? '0.7vw' : '-0.7vw' }, 0vw);` : ""}
    ${props => props.size === "large" ? `width: 2.4vw; height: 2.4vw; top: -0.8vw; transform: translate(${props.checked ? '0.8vw' : '-0.8vw' }, 0vw);`  : ""}


    @media (max-width: 480px) {
        ${props => props.size === "small" ?`width: 9vw; height: 9vw; top: -3vw; transform: translate(${props.checked ? '2.8vw' : '-2.8vw' }, 0vw); ` : ""}
        ${props => props.size === "medium" ?`width: 10vw; height: 10vw; top: -2.9vw; transform: translate(${props.checked ? '2.8vw' : '-2.8vw' }, 0vw);` : ""}
        ${props => props.size === "large" ? `width: 11vw; height: 11vw; top: -3.3vw; transform: translate(${props.checked ? '3.2vw' : '-3.2vw' }, 0vw);`  : ""}
    }
`

interface SwitchSpaceType{
    color: string
    checked: boolean
    disabled?: boolean
    size?: "small" | "medium" | "large"
}

const SwitchSpace = styled.div<SwitchSpaceType>`
    width: 2.2vw;
    height: 0.65vw;
    background-color: ${props => props.checked ? `${props.color}30` : '#80808050'};
    border-radius: 0.5vw;
    margin: auto;
    z-index:1;
    ${ props => props.disabled ? 'opacity: 0.4;' : ''}

    ${props => props.size === "small" ?"width: 2vw; height: 0.45vw;" : ""}
    ${props => props.size === "medium" ?"width:  2.2vw; height: 0.65vw;" : ""}
    ${props => props.size === "large" ?"width: 2.4vw; height: 0.85vw;" : ""}

    @media (max-width: 480px) {
        ${props => props.size === "small" ?"width: 8vw; height: 3vw;" : ""}
        ${props => props.size === "medium" ?"width:  10vw; height: 4vw;" : ""}
        ${props => props.size === "large" ?"width: 12vw; height: 4.3vw;" : ""}
        border-radius: 4vw;
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
    ${props => props.fullWidth ? `margin: auto ${props.labelPosition === 'right' ? '0vw' : 'auto' } auto ${props.labelPosition === 'left' ? '0vw' : 'auto' };` : 'margin: auto 1vw;'}

    ${props => props.size === "small" ?"font-size: 0.55vw;" : ""}
    ${props => props.size === "medium" ?"font-size: 0.7vw;" : ""}
    ${props => props.size === "large" ?"font-size: 0.8vw;" : ""}

    @media (max-width: 480px) {
        ${props => props.size === "small" ?"font-size: 3vw;" : ""}
        ${props => props.size === "medium" ?"font-size: 3.5vw;" : ""}
        ${props => props.size === "large" ?"font-size: 4vw;" : ""}
        ${props => props.fullWidth ? `margin: auto ${props.labelPosition === 'right' ? '0vw' : 'auto' } auto ${props.labelPosition === 'left' ? '0vw' : 'auto' };` : 'margin: auto 4vw;'}
    }
`


type HEX = `#${string}`

interface SwitchType {
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

const Switch: React.FC<SwitchType> = ({label, name , id, value, checked, onChange, disabled, color = '#6200ee', labelPosition = 'right', size = 'medium', fullWidth}) =>{

    const [isFocus, setIsFocus] = useState<boolean>(false)
    const switchRef = useRef<HTMLInputElement>(null)
    
    console.log(isFocus);
    
    const checkedHandler = (checked: string []): boolean => {
        
        const isChecked = checked.reduce(
            (accumulator, currentValue) =>  accumulator === false ? currentValue === value : accumulator,
            false
        )

        return isChecked
   }
    
    const resetBlurHandler = () =>{

        switchRef.current!.blur()

    }

    return(<>
            <SwitchWrapper
                fullWidth={fullWidth}
            >
                <SwitchLabel
                    disabled={disabled}
                    onClick={resetBlurHandler}
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

                    <SwitchElement>
                        <SwitchInput
                            type='checkbox'
                            ref={switchRef} 
                            onChange={onChange}
                            id={id}
                            name ={name}
                            value ={value}
                            checked = {checkedHandler(checked)} 
                            onFocus = {() => setIsFocus(true) }
                            onBlur = {() => setIsFocus(false)}
                            disabled ={disabled}
                        />

                        <AnimationHover
                            checked={checkedHandler(checked)}
                            disabled={disabled}
                            isFocus ={isFocus}
                            color={color}
                            size={size}
                        >
                            <SwitchBall
                                color= {color}
                                disabled = {disabled}
                                checked={checkedHandler(checked)}
                                size={size}
                            >
                            </SwitchBall>

                            {disabled !== true &&
                                <RippleAnimationCenter backgroundColor={checkedHandler(checked) === true ? '#000000' : color } />
                            }
                        </AnimationHover>


                        <SwitchSpace 
                            color= {color}
                            checked={checkedHandler(checked)}
                            disabled = {disabled}
                            size={size}
                        />

               
                    </SwitchElement> 
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

                </SwitchLabel>
            </SwitchWrapper>
    </>
)}

export default Switch