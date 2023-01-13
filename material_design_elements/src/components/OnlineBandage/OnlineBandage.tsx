import styled from "styled-components"
import React from 'react'

const BandageWrapper = styled.div`
    position: relative;
    flex-shrink: 0;
    display: inline-flex;
    vertical-align: middle;
`
interface BandageElementType{
    status: 'online' | 'idle' | 'offline'
}

const BandageElement = styled.div<BandageElementType>`
    display: flex;
    flex-flow: row wrap;
    place-content: center;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    min-width: 0.7vw;
    line-height: 1;
    height: 0.7vw;
    border-radius: 0.521vw;
    z-index: 1;
    bottom: 0vw;
    right: -0.1vw;
    border: 0.15vw solid white;
    overflow: hidden;
    ${props => props.status === 'online' ? 'background-color: #6bb700;' : ''}
    ${props => props.status === 'offline' ? 'background-color: #b8b8b8;' : ''}
    ${props => props.status === 'idle' ? 'background-color: #fdb913;' : ''}
    transition: background-color 0.5s;
    

    @media (max-width: 480px) {
        min-width: 2vw;
        height: 2vw;
        border-radius: 2vw;
        bottom: 0vw;
        right: 0vw;
    }
 `

interface OnlineBandageTypes{
    children: JSX.Element
    status: 'online' | 'idle' | 'offline'
}

const OnlineBandage: React.FC<OnlineBandageTypes> = ({children, status}) =>{

    return(<>
            <BandageWrapper>
                {children}
                <BandageElement status ={status} />
            </BandageWrapper>
    </>
)}

export default OnlineBandage