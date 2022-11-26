import styled from "styled-components"
import React, { useState, MouseEvent } from "react";

interface Animation {
    backgroundColor: string
}

const Animation = styled.div<Animation>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    span {
        transform: scale(0);
        border-radius: 100%;
        position: absolute;
        opacity: 0.6;
        background-color: ${props => props.backgroundColor}100;
        animation: ripple 600ms;
        margin: auto;
    }

    @keyframes ripple {
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`
    

interface Ripple {
    backgroundColor?: string
}

const Ripple: React.FC<Ripple> = ({backgroundColor = '#6200ee'}) =>{

    const [ripples, setRipples] = useState<{x: number, y: number, size: number} []>([])

    const addRipple = (event: MouseEvent) => {

        const divSize = event.currentTarget.getBoundingClientRect()
        
        const size = divSize.width > divSize.height ? divSize.width : divSize.height
        const x = event.pageX - divSize.x - divSize.width / 2
        const y = event.pageY - divSize.y - divSize.width / 2

        setRipples((prevRipples) => [ ...prevRipples, { x, y, size }])
    }


    return(<>
        <Animation onMouseDown={addRipple} backgroundColor={backgroundColor}>
         {
            ripples.length > 0 &&
                ripples.map((ripple, index) => {
                    return (
                        <span
                            key={index}
                            style={{
                                width: ripple.size,
                                height: ripple.size
                            }}
                        />
                    );
            })
        }
        </Animation>
    </>
)}

export default Ripple