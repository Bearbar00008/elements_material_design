import styled from "styled-components"
import React, { useState, useRef, useEffect } from "react"

interface TextFieldElementWrapper {
    fullWidth?:boolean
}

const TextFieldElementWrapper = styled.div<TextFieldElementWrapper>`
    display: inline-block;
    ${ props => props.fullWidth ? 'width: 99%;' : ''}
    margin-top: 1vw;
`

interface TextFieldWrapper {
    error?: boolean
    color?: string
    isFocus: boolean
    disabled?: boolean
    state?: "success" | "error"
}

const TextFieldWrapperOutLined = styled.div<TextFieldWrapper>`
    position: relative;
    border-radius: 5px;
    width: 99%;
    ${props => props.isFocus ? `border-color: ${props.color} !important` : '' };
    border: 2px solid rgba(0,0,0,0.5);
    ${props => props.state === 'success' ? 'border-color: #2e7d32 !important;': ''}
    ${props => props.state === 'error' || props.error ? 'border-color: #d32f2f !important;': ''}
    ${props => props.disabled ? 'border-color: rgba(0,0,0,0.4) !important;' : '' }

    &:hover{
        border-color: rgba(0,0,0,0.7);
    }   
`

interface TextFieldElement {
    fullWidth?: boolean
    sizeInput: "small" | "normal"
}

const TextFieldElementOutLined = styled.input<TextFieldElement>`
    all: unset;
    padding: ${props => props.sizeInput === 'normal' ? '0.8vw 1vw' : '0.5vw 0.7vw'};
    text-align: left;
    font-size: ${props => props.sizeInput === 'normal' ? '1vw' : '0.7vw'};
    z-index: 5;
    ${ props => props.fullWidth ? "width: 98%;" : ''} 


    @media (max-width: 480px) {
        padding: ${props => props.sizeInput === 'normal' ? '3vw 5vw' : '2.5vw 4.5vw'};
        font-size: ${props => props.sizeInput === 'normal' ? '3.5vw' : '3vw'};
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
    padding: 0vw 0.5vw;
    position: absolute;
    background-color: white;
    left: -0.5vw;
    top: 0vw;
    font-size: ${props => props.sizeLabel === 'normal' ? '1vw' : '0.7vw'};
    z-index: ${props => props.labelActive ? '0' : '-1'};
    ${props => props.isFocus  ? `color: ${props.color} !important` : '' };
    color: rgba(0,0,0,0.6);
    ${props => props.state === 'success' ? 'color: #2e7d32 !important;': ''}
    ${props => props.state === 'error' || props.error  ? 'color: #d32f2f !important;': ''}
    ${props => props.disabled ? 'color: rgba(0,0,0,0.4) !important;' : '' }
    transform-origin: top left;
    transform: ${props => props.sizeLabel === 'normal' ? props.labelActive ? 'translate(1.2vw, -0.7vw) scale(0.75)' : 'translate(1vw, 0.8vw) scale(1)' : props.labelActive ? 'translate(1vw, -0.5vw) scale(0.75)' : 'translate(0.7vw, 0.4vw) scale(1)'};
    transition: transform 0.1s ease-in-out, z-index 0.1s;                                                                                                                                                                                                                                                                                                                                 
    text-transform: capitalize;

    @media (max-width: 480px) {
        transform: ${props => props.sizeLabel === 'normal' ? props.labelActive ? 'translate(3.9vw, -2.5vw) scale(0.75)' : 'translate(3vw, 2.8vw) scale(1)' : props.labelActive ? 'translate(3.9vw, -1.7vw) scale(0.75)' : 'translate(3vw, 2.1vw) scale(1)'};
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
    border-radius: 5px 5px 0px 0px;
    background-color: ${props => props.isFocus ? '#80808040' : '#80808020'};
    ${props => props.disabled ? 'background-color: #80808050 !important;' : '' }
    width: 99%;
    transition: background-color 0.1s ease-in-out;
    z-index: 0;

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
    ${ props => props.fullWidth ? "width: 98%;" : ''} 

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
    border-radius: 5px 5px 0px 0px;
    width: 99%;
    transition: background-color 0.1s ease-in-out;
    z-index: 0;
 
    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 1.2px;
        background-color: ${props => props.hover ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.4)'} ;
        ${props => props.state === 'success' ? 'background-color: #2e7d32 !important;': ''}
        ${props => props.state === 'error' || props.error ? 'background-color: #d32f2f !important;': ''}
        ${props => props.disabled ? 'background-color: rgba(0,0,0,0.4) !important;' : '' }
        bottom: -0vw;
        left: 0;
        transform: scale(1);
        transition: .2s all ease-out;
    }
    &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${props => props.color} ;
        ${props => props.state === 'success' ? 'background-color: #2e7d32 !important;': ''}
        ${props => props.state === 'error' || props.error ? 'background-color: #d32f2f !important;': ''}
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
    ${ props => props.fullWidth ? "width: 98%;" : ''} 

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

const HelperText = styled.div`
    width: inherit;
    display: flex;
    padding: 0.2vw 0.5vw;

    @media (max-width: 480px) {
        padding: 0.8vw 2vw;
    }
`

interface CounterCharacters{
    error?: boolean
    sizeDiv: "small" | "normal"
    disabled?: boolean
}

const CounterCharacters = styled.div<CounterCharacters>`
    font-size:  ${props => props.sizeDiv === 'normal' ? '0.7vw' : '0.6vw'};
    margin: 0vw 0vw 0vw auto;
    color: ${props => props.error || props.error ? '#d32f2f' : 'rgba(0,0,0,0.6)' };
    ${props => props.disabled ? 'color: rgba(0,0,0,0.4) !important;' : '' }

    @media (max-width: 480px) {
        font-size:  ${props => props.sizeDiv === 'normal' ? '2.5vw' : '2vw'};
    }
`

interface HelperMessage{
    error?: boolean
    sizeDiv: "small" | "normal"
    disabled?: boolean
}

const HelperMessage = styled.div<HelperMessage>`
    font-size: ${props => props.sizeDiv === 'normal' ? '0.7vw' : '0.6vw'};
    color: ${props => props.error || props.error ? '#d32f2f' : 'rgba(0,0,0,0.6)' };
    ${props => props.disabled ? 'color: rgba(0,0,0,0.4) !important;' : '' }

    @media (max-width: 480px) {
        font-size:  ${props => props.sizeDiv === 'normal' ? '2.5vw' : '2vw'};
    }
`

type HEX = `#${string}`

interface TexField {
    label: string
    name: string
    id: string
    maxLength?: number
    helperText?: string
    error?: boolean
    state?: "success" | "error"
    value?: string
    fullWidth?: boolean
    color?: HEX
    disabled?: boolean
    variant?: "standard" | "contained" | "outlined"
    size?: "small" | "normal"
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField: React.FC<TexField> = ({
    label, 
    maxLength, 
    helperText, 
    error, 
    value, 
    onChange, 
    name, 
    id,
    color = '#6200ee', 
    fullWidth,
    disabled,
    variant = 'standard',
    size = 'normal',
    state
}) =>{

    const inputRef = useRef<HTMLInputElement>(null)
    const [focus, setFocus] = useState<boolean>(false)
    const [labelActive, setLabelActive] = useState<boolean>(false)
    const [hover, setHover] = useState<boolean>(false)
    const [valueLength, setValueLength] = useState<number>(0)
    
    
    useEffect(() => {

        if(inputRef.current){
            if(focus === true || inputRef.current?.value.length > 0 || value ){
                setLabelActive(true)
            } else{
                setLabelActive(false)
                setValueLength(inputRef.current.value.length)
            }
        }

    },[focus, value])
  

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueLength(e.target.value.length)

        if(onChange){
            onChange(e)
        }
    }

    return(<>
            <TextFieldElementWrapper fullWidth ={fullWidth}>


                { variant === 'outlined' &&
                    
                    <TextFieldWrapperOutLined 
                        error={error} 
                        color = {color} 
                        isFocus ={focus} 
                        disabled = {disabled}
                        state={state}
                    >
                        <TextFieldElementOutLined
                            ref = {inputRef}
                            onFocus = {() => setFocus(true)}
                            onBlur = {() => setFocus(false)}
                            onChange = { onChangeHandler}
                            maxLength = {maxLength}
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
                            isFocus ={focus}
                            sizeLabel={size}
                            disabled = {disabled}
                            state={state}
                        >
                            {label}
                        </TextFieldLabelOutlined>
                    
                    </TextFieldWrapperOutLined>
                }

                { variant === 'contained' &&
                    <TextFieldWrapperContained 
                        error={error} 
                        color = {color} 
                        isFocus ={focus}
                        disabled = {disabled} 
                        state={state}
                    >
                    
                        <TextFieldElementContained 
                            ref = {inputRef}
                            sizeInput={size}
                            fullWidth = {fullWidth}
                            onFocus = {() => setFocus(true)}
                            onBlur = {() => setFocus(false)}
                            onChange = { onChangeHandler}
                            maxLength = {maxLength}
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
                                isFocus ={focus}
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
                            isFocus ={focus}
                            disabled = {disabled}
                            state={state}
                            onMouseOver = {() => setHover(true)}
                            onMouseLeave = { () => setHover(false)}
                            hover = {hover}
                        >
                            <TextFieldElementStandard 
                                ref = {inputRef}
                                sizeInput={size}
                                fullWidth = {fullWidth}
                                onFocus = {() => setFocus(true)}
                                onBlur = {() => setFocus(false)}
                                onChange = { onChangeHandler}
                                maxLength = {maxLength}
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
                                    isFocus ={focus}
                                    sizeLabel={size}
                                    disabled = {disabled}
                                    state={state}
                            >
                                {label}
                            </TextFieldLabelStandard>
                        

                        </TextFieldWrapperStandard>
                    }

                {(typeof(helperText) === 'string' || typeof(maxLength) === 'number') &&
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

                        {typeof(maxLength) === 'number' && 
                            <CounterCharacters 
                                error={error} 
                                sizeDiv={size}
                                disabled ={disabled}
                            > 
                                {`${valueLength} / ${maxLength}`}
                            </CounterCharacters>
                        }
                    </HelperText>
                }
                
            </TextFieldElementWrapper>
    </>
)}

export default TextField