import styled from "styled-components"
import TextFiled from './TextFieldSelect'
import RadioSelectElement from "./RadioSelectElement"
import React, { useState, useRef } from "react"
import { useClickOutside } from './hooks'

const SelectWrapper = styled.div`
    display: inline-block;
    z-index: 1;
    position: relative;
`

interface SelectOptionWrappersType{
    active: boolean
}

const SelectOptionWrappers = styled.div<SelectOptionWrappersType>`
    width: 100%;
    ${props => props.accessKey ? '':''}
    transform:  translate(0vw, ${props => props.active ? '0vw':'-5vw'}) scale(${props => props.active ? '1':'0'});
    opacity: ${props => props.active ? '1':'0'};
    transition: transform 0.4s, opacity 0.2s;
    border-radius: 0.3vw;
    overflow: auto;
    box-shadow: 0vw 0vw 3px black;
    padding: 0.5vw 0vw;
    margin-top: 0.3vw;
    background-color: white;
    z-index: 2;
    position: absolute;

    @media (max-width: 480px) {
        padding: 2vw 0vw;
        margin-top: 0.9vw;
        border-radius: 0.8vw;
    }
`

const HelperText = styled.div`
    width: inherit;
    display: flex;
    padding: 0.5vw 0.5vw;
    font-family: Arial, sans-serif;

    @media (max-width: 480px) {
        padding: 2vw 2vw;
    }
`

interface HelperMessage{
    error?: boolean
    sizeDiv: "small" | "normal"
    disabled?: boolean
}

const HelperMessage = styled.div<HelperMessage>`
    font-family: Arial, sans-serif;
    font-size: ${props => props.sizeDiv === 'normal' ? '0.7vw' : '0.6vw'};
    color: ${props => props.error || props.error ? '#d32f2f' : 'rgba(0,0,0,0.6)' };
    ${props => props.disabled ? 'color: rgba(0,0,0,0.4) !important;' : '' }

    @media (max-width: 480px) {
        font-size:  ${props => props.sizeDiv === 'normal' ? '2.5vw' : '2vw'};
    }
`

type HEX = `#${string}`

interface data {
    label: string
    value: string
}

interface SelectType {
    label: string
    name: string
    data: data []
    id?: string
    helperText?: string
    error?: boolean
    state?: "success" | "error"
    fullWidth?: boolean
    color?: HEX
    disabled?: boolean
    variant?: "standard" | "contained" | "outlined"
    size?: "small" | "normal"
}

const Select: React.FC<SelectType> = ({ 
    label, 
    helperText, 
    error,  
    name, 
    id,
    color = '#6200ee', 
    fullWidth,
    disabled,
    variant = 'outlined',
    size = 'normal',
    data,
    state}) =>{

    const [value, setValue] = useState<string>('')
    const [active, setActive] = useState<boolean>(false)
    
    const select = useRef<HTMLDivElement>(null) 

    useClickOutside(select, () => setActive(false))
    
    return(<>
        <SelectWrapper ref = {select} >
            
            <TextFiled 
                name={name} 
                label= {label}
                helperText={helperText}
                error={error}
                id={id}
                color={color}
                fullWidth={fullWidth}
                disabled={disabled}
                variant={variant}
                size={size}
                state={state}
                value={value}
                callbackActive={(a: boolean) => setActive(a)}
                active={active}
            /> 

            <SelectOptionWrappers active ={active} >
                <RadioSelectElement  
                    size={size} 
                    label='none'
                    value='' 
                    color={color}
                    onClick={(e:string) => {setValue(e); setActive(false); } }
                />
                {data.map(el=>{
                    return <RadioSelectElement  
                                size={size} 
                                label={el.label} 
                                value={el.value} 
                                color={color}
                                key={el.value}
                                onClick={(e:string) => {setValue(e); setActive(false); } }
                            />
                })}
            </SelectOptionWrappers>
          
            {typeof(helperText) === 'string' &&
                    <HelperText>
                        {typeof(helperText) === 'string' &&
                            <HelperMessage 
                                error ={error} 
                                sizeDiv ={size} 
                                disabled ={disabled}
                            >
                                {helperText}
                            </HelperMessage>
                        }

                    </HelperText>
                }
                
        </SelectWrapper>    

    </>
)}

export default Select