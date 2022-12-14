import styled from "styled-components"
import React, { useState, useRef, useEffect } from "react"

interface TextFieldElementWrapper {
    fullWidth?:boolean
    disabled?: boolean
}

const TextFieldElementWrapper = styled.div<TextFieldElementWrapper>`
    display: inline-block;
    caret-color: transparent;
    text-transform: capitalize;
    ${ props => props.fullWidth ? 'width: 99%;' : ''}
    ${props => props.disabled ? '' : 'cursor:pointer;' }
`

const TextFieldWrapperOutLined = styled.div`
    position: relative;
    padding: 0vw;
`

interface TextFieldElement {
    fullWidth?: boolean
    sizeInput: "small" | "normal"
}

const TextFieldElementOutLined = styled.input<TextFieldElement>`
    
    position: absolute;
    caret-color: transparent;
    left: 0vw;
    top: 0vw;
    all: unset;
    padding: ${props => props.sizeInput === 'normal' ? '0.8vw 1vw' : '0.5vw 0.7vw'};
    text-align: left;
    font-size: ${props => props.sizeInput === 'normal' ? '1vw' : '0.7vw'};
    z-index: 5;
    ${ props => props.fullWidth ? "width: 98%;" : ''} 
    font-family: Arial, sans-serif;
    display: block;

    @media (max-width: 480px) {
        padding: ${props => props.sizeInput === 'normal' ? '3vw 5vw' : '2.5vw 4.5vw'};
        font-size: ${props => props.sizeInput === 'normal' ? '3.5vw' : '3vw'};
    }
`

interface TextFieldWrapper {
    error?: boolean
    color?: string
    isFocus: boolean
    disabled?: boolean
    state?: "success" | "error"
}

const OutLineFieldset = styled.fieldset<TextFieldWrapper>`
    position: absolute;
    z-index: 0;
    top: 0vw;
    left: 0vw;
    margin: 0;
    padding: 0;
    width: 99%;
    height: 100%;
    border-radius: 0.3vw;
    ${props => props.isFocus ? `border-color: ${props.color} !important` : '' };
    border: 0.1vw solid rgba(0,0,0,0.5);
    ${props => props.state === 'success' ? 'border-color: #2e7d32 !important;': ''}
    ${props => props.state === 'error' || props.error ? 'border-color: #d32f2f !important;': ''}
    ${props => props.disabled ? 'border-color: rgba(0,0,0,0.4) !important;' : '' }
    text-transform: capitalize;
    text-overflow: ellipsis; 
    white-space: nowrap;
    pointer-events: none;
    font-family: Arial, sans-serif;

    &:hover{
        border-color: rgba(0,0,0,0.7);
    }

    @media (max-width: 480px) {
        width: 99.5%;
        border-radius: 1vw;
    }
`

interface OutLineLegend {
    sizeLabel: "small" | "normal"
    labelActive: boolean
}

const OutLineLegend = styled.legend<OutLineLegend>`
    float: unset;
    width: auto;
    overflow: hidden;
    padding: 0vw 0.5vw;
    height: 0;
    font-size: ${props => props.sizeLabel === 'normal' ? '0.76vw' : '0.55vw'};
    max-width: 100%;
    transition: max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms;
    white-space: nowrap;      
    text-overflow: ellipsis;  
    margin-left:${props => props.sizeLabel === 'normal' ? '0.5vw' : '0.1vw'};

    @media (max-width: 480px) {
        font-size: ${props => props.sizeLabel === 'normal' ? '3.5vw' : '3vw'};
        margin-left:${props => props.sizeLabel === 'normal' ? '3.3vw' : '0.9vw'};
        padding: 0vw 1vw;
    }
`

interface TextFieldLabel {
    labelActive: boolean
    error?: boolean
    color?: string
    isFocus: boolean
    sizeLabel: "small" | "normal"
    disabled?: boolean
    state?: "success" | "error"
}


const TextFieldLabelOutlined = styled.label<TextFieldLabel>`
    position: absolute;
    font-family: Arial, sans-serif;
    top: 0vw;
    font-size: ${props => props.sizeLabel === 'normal' ? '1vw' : '0.7vw'};
    z-index: 0;
    ${props => props.isFocus  ? `color: ${props.color} !important` : '' };
    color: rgba(0,0,0,0.6);
    ${props => props.state === 'success' ? 'color: #2e7d32 !important;': ''}
    ${props => props.state === 'error' || props.error  ? 'color: #d32f2f !important;': ''}
    ${props => props.disabled ? 'color: rgba(0,0,0,0.4) !important;' : '' }
    transform-origin: top left;
    transform: ${props => props.sizeLabel === 'normal' ? props.labelActive ? 'translate(0.9vw, -0.45vw) scale(0.75)' : 'translate(1vw, 1vw) scale(1)' : props.labelActive ? 'translate(1vw, -0.3vw) scale(0.75)' : 'translate(0.7vw, 0.6vw) scale(1)'};
    transition: transform 0.1s ease-in-out, z-index 0.1s;                                                                                                                                                                                                                                                                                                                                 
    text-transform: capitalize;
    text-overflow: ellipsis; 
    pointer-events: none;
    padding: 0vw 0.5vw;
    margin-left:${props => props.sizeLabel === 'normal' ? ' -0.15vw' : '-0.6vw'};
    @media (max-width: 480px) {
        transform: ${props => props.sizeLabel === 'normal' ? props.labelActive ? 'translate(3.9vw, -1.8vw) scale(0.75)' : 'translate(3vw, 3vw) scale(1)' : props.labelActive ? 'translate(3.3vw, -1.3vw) scale(0.75)' : 'translate(3vw, 2.8vw) scale(1)'};
        padding: 0vw 2vw;
        font-size: ${props => props.sizeLabel === 'normal' ? '3.5vw' : '3vw'};
    }
`

interface TextFieldWrapperContainer {
    error?: boolean
    color?: string
    isFocus: boolean
    disabled?: boolean
    state?: "success" | "error"
}

const TextFieldWrapperContained = styled.div<TextFieldWrapperContainer>`
    position: relative;
    border-radius: 0.3vw 0.3vw 0vw 0vw;
    background-color: ${props => props.isFocus ? '#80808040' : '#80808020'};
    ${props => props.disabled ? 'background-color: #80808050 !important;' : '' }
    width: 99%;
    transition: background-color 0.1s ease-in-out;
    z-index: 0;
    display: inline-block;
    margin: 0;
    padding: 0;
    &:hover{
        background-color:#80808060;
    }
    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 1.2px;
        background-color: rgba(0,0,0,0.6);
        ${props => props.state === 'success' ? 'background-color: #2e7d32 !important;': ''}
        ${props => props.state === 'error' || props.error ? 'background-color: #d32f2f !important;': ''}
        ${props => props.disabled ? 'background-color: rgba(0,0,0,0.4) !important;' : '' }
        bottom: -0vw;
        left: 0;
    }
    &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${props => props.color} ;
        ${props => props.state === 'success' ? 'background-color: #2e7d32 !important;': ''}
        ${props => props.state === 'error' || props.error ? 'background-color: #d32f2f !important;': ''}
        ${props => props.disabled ? 'background-color: rgba(0,0,0,0.4) !important;' : '' }
        bottom: -0vw;
        left: 0;
        transform: ${props => props.isFocus ? `scale(1)` : 'scale(0)' }; ;
        transition: .2s all ease-out;
    }
`

interface TextFieldElementContained {
    fullWidth?: boolean
    sizeInput: "small" | "normal"
}

const TextFieldElementContained = styled.input<TextFieldElementContained>`
    all: unset;
    padding: ${props => props.sizeInput === 'normal' ? '1.2vw 1vw 0.4vw 1vw ' : '0.9vw 0.7vw 0.3vw 0.7vw'};
    text-align: left;
    font-size: ${props => props.sizeInput === 'normal' ? '1vw' : '0.7vw'};
    z-index: 1;
    background-color: #f5f5f500;
    font-family: Arial, sans-serif;
    ${ props => props.fullWidth ? "width: 98%;" : ''} 
    display: block;
    @media (max-width: 480px) {
        padding: ${props => props.sizeInput === 'normal' ? '4.25vw 5vw 1.25vw 5vw' : '3.5vw 4.5vw 1vw 4.5vw'};
        font-size: ${props => props.sizeInput === 'normal' ? '3.5vw' : '3vw'};
    }
`

interface TextFieldLabelContained {
    labelActive: boolean
    error?: boolean
    color?: string
    isFocus: boolean
    sizeLabel: "small" | "normal"
    disabled?: boolean
    state?: "success" | "error"
}

const TextFieldLabelContained = styled.label<TextFieldLabelContained>`
    padding: 0vw 0.5vw;
    position: absolute;
    font-family: Arial, sans-serif;
    left: -0.5vw;
    top: 0vw;
    font-size: ${props => props.sizeLabel === 'normal' ? '1vw' : '0.7vw'};
    z-index: ${props => props.labelActive ? '0' : '-1'};
    ${props => props.isFocus && props.error !== false ? `color: ${props.color} !important` : '' };
    color: rgba(0,0,0,0.6);
    ${props => props.state === 'success' ? 'color: #2e7d32 !important;': ''}
    ${props => props.state === 'error' || props.error ? 'color: #d32f2f !important;': ''}
    ${props => props.disabled ? 'color: rgba(0,0,0,0.4) !important;' : '' }
    transform-origin: top left;
    transform: ${props => props.sizeLabel === 'normal' ? props.labelActive ? 'translate(1vw, 0.1vw) scale(0.75)' : 'translate(1vw, 0.8vw) scale(1)' : props.labelActive ? 'translate(1vw, 0.1vw) scale(0.75)' : 'translate(0.7vw, 0.5vw) scale(1)'};
    transition: transform 0.1s ease-in-out, z-index 0.1s;
    text-transform: capitalize;

    @media (max-width: 480px) {
        transform: ${props => props.sizeLabel === 'normal' ? props.labelActive ? 'translate(3.9vw, 0.5vw) scale(0.75)' : 'translate(3vw, 2.3vw) scale(1)' : props.labelActive ? 'translate(3.9vw, 0.5vw) scale(0.75)' : 'translate(3vw, 1.9vw) scale(1)'};
        padding: 0vw 2vw;
        font-size: ${props => props.sizeLabel === 'normal' ? '3.5vw' : '3vw'};
    }
`

interface TextFieldWrapperStandard {
    error?: boolean
    color?: string
    isFocus: boolean
    disabled?: boolean
    state?: "success" | "error"
    hover: boolean
}

const TextFieldWrapperStandard = styled.div<TextFieldWrapperStandard>`
    position: relative;
    border-radius: 0.3vw 0.3vw 0vw 0vw;
    width: 99%;
    transition: background-color 0.1s ease-in-out;
    z-index: 0;
    display: inline-block;
    margin: 0;
    padding: 0;
    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 1.2px;
        background-color: rgba(0,0,0,0.6);
        ${props => props.state === 'success' ? 'background-color: #2e7d32 !important;': ''}
        ${props => props.state === 'error' || props.error ? 'background-color: #d32f2f !important;': ''}
        ${props => props.disabled ? 'background-color: rgba(0,0,0,0.4) !important;' : '' }
        bottom: -0vw;
        left: 0;
    }
    &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${props => props.color} ;
        ${props => props.state === 'success' ? 'background-color: #2e7d32 !important;': ''}
        ${props => props.state === 'error' || props.error ? 'background-color: #d32f2f !important;': ''}
        ${props => props.disabled ? 'background-color: rgba(0,0,0,0.4) !important;' : '' }
        bottom: -0vw;
        left: 0;
        transform: ${props => props.isFocus ? `scale(1)` : 'scale(0)' }; ;
        transition: .2s all ease-out;
    }
`

interface TextFieldElementStandard {
    fullWidth?: boolean
    sizeInput: "small" | "normal"
}

const TextFieldElementStandard = styled.input<TextFieldElementStandard>`
    all: unset;
    padding: ${props => props.sizeInput === 'normal' ? '1.2vw 1vw 0.4vw 1vw ' : '0.9vw 0.7vw 0.3vw 0.7vw'};
    text-align: left;
    font-size: ${props => props.sizeInput === 'normal' ? '1vw' : '0.7vw'};
    z-index: 1;
    background-color: #f5f5f500;
    font-family: Arial, sans-serif;
    ${ props => props.fullWidth ? "width: 98%;" : ''} 
    display: block;
    @media (max-width: 480px) {
        padding: ${props => props.sizeInput === 'normal' ? '4.25vw 5vw 1.25vw 5vw' : '3.5vw 4.5vw 1vw 4.5vw'};
        font-size: ${props => props.sizeInput === 'normal' ? '3.5vw' : '3vw'};
    }
`

interface TextFieldLabelStandard {
    labelActive: boolean
    error?: boolean
    color?: string
    isFocus: boolean
    sizeLabel: "small" | "normal"
    disabled?: boolean
    state?: "success" | "error"
}

const TextFieldLabelStandard = styled.label<TextFieldLabelStandard>`
    padding: 0vw 0.5vw;
    position: absolute;
    font-family: Arial, sans-serif;
    left: -0.5vw;
    top: 0vw;
    font-size: ${props => props.sizeLabel === 'normal' ? '1vw' : '0.7vw'};
    z-index: ${props => props.labelActive ? '0' : '-1'};
    ${props => props.isFocus && props.error !== false ? `color: ${props.color} !important` : '' };
    color: rgba(0,0,0,0.6);
    ${props => props.state === 'success' ? 'color: #2e7d32 !important;': ''}
    ${props => props.state === 'error' || props.error ? 'color: #d32f2f !important;': ''}
    ${props => props.disabled ? 'color: rgba(0,0,0,0.4) !important;' : '' }
    transform-origin: top left;
    transform: ${props => props.sizeLabel === 'normal' ? props.labelActive ? 'translate(1vw, 0.1vw) scale(0.75)' : 'translate(1vw, 0.8vw) scale(1)' : props.labelActive ? 'translate(1vw, 0.1vw) scale(0.75)' : 'translate(0.7vw, 0.5vw) scale(1)'};
    transition: transform 0.1s ease-in-out, z-index 0.1s;
    text-transform: capitalize;

    @media (max-width: 480px) {
        transform: ${props => props.sizeLabel === 'normal' ? props.labelActive ? 'translate(3.9vw, 0.5vw) scale(0.75)' : 'translate(3vw, 2.3vw) scale(1)' : props.labelActive ? 'translate(3.9vw, 0.5vw) scale(0.75)' : 'translate(3vw, 1.9vw) scale(1)'};
        padding: 0vw 2vw;
        font-size: ${props => props.sizeLabel === 'normal' ? '3.5vw' : '3vw'};
    }
`


interface ArrowIconType {
    variant?: "standard" | "contained" | "outlined"
    dropDown: boolean
    disabled?:boolean
    size?: "small" | "normal"
}

const ArrowIcon = styled.div<ArrowIconType>`
    border-top: 0.3vw solid rgba(0,0,0,0.5);
    border-left: 0.35vw solid transparent;
    border-right: 0.35vw solid transparent;
    transform: rotate(${props => props.dropDown ? '180' : '0'}deg);
    position: absolute;
    right: 0.5vw; 
    top: ${props => props.size === 'normal' ? '1.4vw' : '0.8vw'};   
    ${props => props.size === 'normal' ?  'border-top: 0.3vw solid rgba(0,0,0,0.5); border-left: 0.35vw solid transparent; border-right: 0.35vw solid transparent;': 'border-top: 0.25vw solid rgba(0,0,0,0.5); border-left: 0.30vw solid transparent; border-right: 0.30vw solid transparent;' }
    ${props => props.disabled ? 'opacity: 0.5;' :''}

    @media (max-width: 480px) {
        right: 2vw;
        top: ${props => props.size === 'normal' ? '4.5vw' : '4vw'};
        ${ props => props.size === 'normal' ?  'border-top: 1.3vw solid rgba(0,0,0,0.5); border-left: 1.5vw solid transparent; border-right: 1.5vw solid transparent;': 'border-top: 1vw solid rgba(0,0,0,0.5); border-left: 1.05vw solid transparent; border-right: 1.05vw solid transparent;' }
    }
`


interface TexFieldSelectType {
    label: string
    name: string
    id?: string
    helperText?: string
    error?: boolean
    state?: "success" | "error"
    value?: string
    fullWidth?: boolean
    color?: string
    disabled?: boolean
    variant?: "standard" | "contained" | "outlined"
    size?: "small" | "normal"
    callbackActive: (a: boolean) => void,
    active: boolean
}

const TextFieldSelect: React.FC<TexFieldSelectType> = ({
    label, 
    error, 
    value, 
    name, 
    id,
    color = '#6200ee', 
    fullWidth,
    disabled,
    variant = 'standard',
    size = 'normal',
    state,
    callbackActive,
    active
}) =>{
    const inputRef = useRef<HTMLInputElement>(null)
    const [labelActive, setLabelActive] = useState<boolean>(false)
    const [hover, setHover] = useState<boolean>(false)

    
    useEffect(() => {

        if(active === true || value ){
            setLabelActive(true)
        } else{
            setLabelActive(false)
        }

    },[active, value])
  

    return(<>
            <TextFieldElementWrapper fullWidth ={fullWidth} disabled ={disabled}>

                

                { variant === 'outlined' &&
                    
                    <TextFieldWrapperOutLined>
                        
                        <ArrowIcon 
                            dropDown={active} 
                            disabled={disabled} 
                            size={size}
                        /> 

                        <TextFieldElementOutLined
                            ref = {inputRef}
                            onFocus = {() => active === true ? null :callbackActive(true)}
                            value = {value}
                            id = {id}
                            name = {name}
                            type = 'text'
                            fullWidth = {fullWidth}
                            autoComplete = "off"
                            disabled = {disabled}
                            sizeInput={size}
                        />

                        <TextFieldLabelOutlined 
                            labelActive = {labelActive} 
                            error={error}
                            color = {color} 
                            isFocus ={active}
                            sizeLabel={size}
                            disabled = {disabled}
                            state={state}
                        >
                            {label}
                        </TextFieldLabelOutlined>

                        <OutLineFieldset
                            error={error} 
                            color = {color} 
                            isFocus ={active} 
                            disabled = {disabled}
                            state={state}
                        >
                            {labelActive && 
                                <OutLineLegend
                                    labelActive = {labelActive} 
                                    sizeLabel={size}
                                >
                                    {label}
                                </OutLineLegend>
                            }
                        </OutLineFieldset>
                    </TextFieldWrapperOutLined>
                }

                { variant === 'contained' &&
                    <TextFieldWrapperContained 
                        error={error} 
                        color = {color} 
                        isFocus ={active}
                        disabled = {disabled} 
                        state={state}
                    >
                        <ArrowIcon 
                            dropDown={active} 
                            disabled={disabled} 
                            size={size}
                        /> 

                        <TextFieldElementContained 
                            ref = {inputRef}
                            sizeInput={size}
                            fullWidth = {fullWidth}
                            onFocus = {() => active === true ? null :callbackActive(true)}
                            value = {value}
                            id = {id}
                            name = {name}
                            autoComplete = "off"
                            disabled = {disabled}
                            type = 'text'
                        />

                        <TextFieldLabelContained 
                                labelActive = {labelActive} 
                                error={error}
                                color = {color} 
                                isFocus ={active}
                                sizeLabel={size}
                                disabled = {disabled}
                                state={state}
                        >
                        {label}
                    </TextFieldLabelContained>
                    

                    </TextFieldWrapperContained>
                }

                { variant === 'standard' &&
                        <TextFieldWrapperStandard 
                            error={error} 
                            color = {color} 
                            isFocus ={active}
                            disabled = {disabled}
                            state={state}
                            onMouseOver = {() => setHover(true)}
                            onMouseLeave = { () => setHover(false)}
                            hover = {hover}
                        >
                            <ArrowIcon 
                                dropDown={active} 
                                disabled={disabled} 
                                size={size}
                            /> 

                            <TextFieldElementStandard 
                                ref = {inputRef}
                                sizeInput={size}
                                fullWidth = {fullWidth}
                                onFocus = {() => active === true ? null :callbackActive(true)}
                                value = {value}
                                id = {id}
                                name = {name}
                                autoComplete = "off"
                                disabled = {disabled}
                                type = 'text'
                            />

                            <TextFieldLabelStandard 
                                labelActive = {labelActive} 
                                error={error}
                                color = {color} 
                                isFocus ={active}
                                sizeLabel={size}
                                disabled = {disabled}
                                state={state}
                            >
                                {label}
                            </TextFieldLabelStandard>
                        

                        </TextFieldWrapperStandard>
                    }

               
            </TextFieldElementWrapper>
    </>
)}

export default TextFieldSelect