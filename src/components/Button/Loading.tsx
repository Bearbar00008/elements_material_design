import styled from "styled-components"
import React from "react"

const RingWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    top: 0vw;
    left: 0vw;
` 
interface Ring{
    color: string
}
const Ring = styled.div`
    margin: auto;
    display: inline-block;
    position: relative;
    width: 1vw;
    height: 1vw;


    div{
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 1vw;
        height: 1vw;
        margin: 0;
        border: 0.15vw solid;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => props.color} transparent transparent transparent;
    }

    div:nth-child(1) {
        animation-delay: -0.45s;
      }
    div:nth-child(2) {
        animation-delay: -0.3s;
      }
    div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    }
`

interface Loading {
    color: string
}

const Loading: React.FC<Loading> = ({color}) =>{

    return(<>
            <RingWrapper>
                <Ring color ={color}>
                    <div />
                    <div />
                    <div />
                    <div />
                </Ring>
            </RingWrapper>
    </>
)}

export default Loading