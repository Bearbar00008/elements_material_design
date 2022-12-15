import React, { useState } from "react";
import styled, {keyframes} from "styled-components"


const rotate = keyframes`
    100%{
        transform: rotate(360deg);
    }
`

const checked = (width: string, height: string) => keyframes`
    0%{
        height: 0;
        width: 0;
        opacity: 1;
    }
    20%{
        width: ${width};
        height: 0;
        opacity: 1;
    }
    40%{

        width: ${width};
        height: ${height};
        opacity: 1;
    }
    100%{
        width: ${width};
        height: ${height};
        opacity: 1;
    }
`

interface LabelType {
    clicked?: boolean
    color: string
    size: "small" | "medium" | "large"
}

const CheckAnimationElement = styled.div<LabelType>`

    ${props => props.size === 'small' ? 'height: 3vw; width: 3vw;' : ''}
    ${props => props.size === 'medium' ? 'height: 5.010vw; width: 5.010vw;' : ''}
    ${props => props.size === 'large' ? 'height: 6.510vw; width: 6.510vw;' : ''}
        
    display: inline-block;
    border: 0.104vw solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    border-left-color: ${props =>  props.color};
    position: relative;
    animation: ${rotate} 1.2s linear infinite;
    ${ props => props.clicked ? `animation: none; border-color: ${props.color}; transition: border 0.5s ease-out;` : ''}

    @media (max-width: 480px) {
        ${props => props.size === 'small' ? 'height: 12vw; width: 12vw;' : ''}
        ${props => props.size === 'medium' ? 'height: 16.020vw; width: 16.020vw;' : ''}
        ${props => props.size === 'large' ? 'height: 19.020vw; width:  19.020vw;' : ''}
        border-width: 0.4vw;    
    }

    &:after{
        display: ${props => props.clicked ? 'block' : 'none'};
        position: absolute;
        content: "";
        top: 50%;
        transform: scaleX(-1) rotate(135deg);

        ${props => props.size === 'small' ? `height: 1.2vw; width: 0.6vw; left: 0.8vw;` : ''}
        ${props => props.size === 'medium' ? `height: 2vw; width: 1vw; left: 1.3vw;` : ''}
        ${props => props.size === 'large' ? `height: 2.917vw; width: 1.458vw; left: 1.458vw;` : ''}

        animation: ${props => props.size === 'small' ?checked('0.6vw', '1.2vw'): ''}${props => props.size === 'medium' ?checked('1vw', '2vw'): ''}${props => props.size === 'large' ?checked('1.458vw', '2.917vw'): ''}  0.8s ease;

        border-top: 0.208vw solid ${props => props.color};
        border-right: 0.208vw solid ${props => props.color};
        transform-origin: left top;

       @media (max-width: 480px) {
        ${props => props.size === 'small' ? 'height: 6.5vw; width: 3vw; left: 2.5vw;' : ''}
        ${props => props.size === 'medium' ? 'height: 8.5vw; width: 4vw; left: 3.5vw;' : ''}
        ${props => props.size === 'large' ? 'height: 10.5vw; width: 5vw; left: 4vw;' : ''}
        border-width: 0.6vw;  
        animation: ${props => props.size === 'small' ?checked('3vw', '6.5vw'): ''}${props => props.size === 'medium' ?checked('4vw', '8.5vw'): ''}${props => props.size === 'large' ?checked('5vw', '10.5vw'): ''}  0.8s ease;
       }
    }
    
`

type HEX = `#${string}`

interface CheckAnimationType{
    color?: HEX
    success?: boolean
    checked?: boolean
    size?: "small" | "medium" | "large"
}

const CheckAnimation: React.FC<CheckAnimationType> = ({
    color = '#6200ee',
    checked,
    success = false,
    size = 'medium'
}) =>{

    const [clicked, setClicked] = useState<boolean>(false)

    return(<>
        <CheckAnimationElement 
            onClick ={ () => setClicked(prev => !prev)}
            clicked ={clicked} 
            color={success === true ? '#2e7d32' : color}
            size={size}
        />
    </>
)}

export default CheckAnimation