import styled from "styled-components"
import React from "react"

interface RadioSelectElementLabelType{
    color: string
}

const RadioSelectElementLabel = styled.div<RadioSelectElementLabelType>`
    with: 100%;
    padding: 0.5vw 1.2vw;
    cursor: pointer;
    display: block;
    
    @media (max-width: 480px) {
        padding: 2vw 4vw;
    }
    
    &:hover{
        background-color: ${props => props.color}20;
    }
`
interface ParagraphLabel{
    size: "small" | "normal"
}

const Paragraph = styled.p<ParagraphLabel>`
    font-family: Arial, sans-serif;
    font-size: ${props => props.size === 'normal' ? '1vw' : '0.7vw'};
    text-align: left;
    color: rgba(0,0,0,0.6);
    text-transform: capitalize;
    margin: 0;

    @media (max-width: 480px) {
        font-size: ${props => props.size === 'normal' ? '3.5vw' : '3vw'};
    }
`


interface RadioSelectElementType{
    label: string
    value: string
    size: "small" | "normal"
    color: string
    onClick: (e:string) => void
}

const RadioSelectElement: React.FC<RadioSelectElementType> = ({label, value, size, color, onClick}) =>{

    return(<>
        <RadioSelectElementLabel onClick={() => onClick(value)} color={color}>
            <Paragraph size = {size}>
                {label}
            </Paragraph>
        </RadioSelectElementLabel>
    </>
)}

export default RadioSelectElement