import styled from "styled-components"
import React, { useEffect, useState } from "react"

const BandageWrapper = styled.div`
    position: relative;
    flex-shrink: 0;
    display: inline-flex;
    vertical-align: middle;
`

interface BandageElement{
    color: string
    notification: boolean
    variant: 'dot' | 'regular'
}

const BandageElement = styled.div<BandageElement>`
    display: flex;
    flex-flow: row wrap;
    place-content: center;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    font-weight: 500;
    font-size: 0.75vw;
    min-width: ${props => props.variant === 'regular' ? '1.042' : '0.6'}vw;
    line-height: 1;
    padding: 0px 0.313vw;
    height: ${props => props.variant === 'regular' ? '1.042' : '0.6'}vw;
    border-radius: 0.521vw;
    z-index: 1;
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: ${props => props.color};
    color: rgb(255, 255, 255);
    top: 0.2vw;
    right: 0.2vw;
    transform: scale(${props => props.notification ? '1' : '0'}) translate(50%, -50%);
    transform-origin: 100% 0%;

    @media (max-width: 480px) {
        min-width: ${props => props.variant === 'regular' ? '3.5' : '2'}vw;
        height: ${props => props.variant === 'regular' ? '3.5' : '2'}vw;
        border-radius: 2vw;
        font-size: 2.5vw;
        padding: 0px 1vw;
        top: 0.7vw;
        right: 0.5vw;
    }
 `

type HEX = `#${string}`

interface BandageType {
    children : JSX.Element
    numberNotifications: number
    max?: number
    color?: HEX
    variant?: 'dot' | 'regular'
}

const NotificationBandage: React.FC<BandageType> = ({children, numberNotifications, max, color = '#6200ee', variant = 'regular' }) =>{

    const [numberNotificationState, setNumberNotificationState] = useState<string>('')

    useEffect(() => {
    
        if(max){
            if(numberNotifications > max){
                setNumberNotificationState(`${max}+`)
            }else{
                setNumberNotificationState(`${numberNotifications}`)
            }
        } else{
            setNumberNotificationState(`${numberNotifications}`)
        }
    },[numberNotifications])

    return(<>
            <BandageWrapper>
               
                <BandageElement color={color} notification={numberNotifications !== 0} variant = {variant}>
                    {variant !== 'dot' ? numberNotificationState : null}
                </BandageElement>
                
                {children}
            </BandageWrapper>
        </>
)}

export default NotificationBandage