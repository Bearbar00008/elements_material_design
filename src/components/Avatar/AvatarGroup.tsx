import styled from 'styled-components'
import Avatar from './Avatar'
import React, { useEffect, useState } from 'react'

const AvatarGroupWrapper = styled.div`
    display: inline-flex; 
`

interface WrapperElementType{
    index: number
}

const WrapperElement = styled.div<WrapperElementType>`
    display: inline-block; 
    border-radius: 50%;

    margin-left: ${props => props.index === 0 ? '0' : '-0.5'}vw;
    z-index: ${props => props.index};
    
    div{
        border: 0.15vw solid white;
    }

    @media (max-width: 480px) {
        margin-left: ${props => props.index === 0 ? '0' : '-1.5'}vw;
    }
`

const Div=styled.div`
    width: inherit;
    height: inherit;
    background-color: red;

`
interface AvatarGroupType {
    children: JSX.Element []
    max?: number
    total?: number
}


const AvatarGroup: React.FC<AvatarGroupType> = ({children, max, total}) =>{

    const [maxNumber, setMaxNumber] = useState<string>('')
    const [totalNumber, setTotalNumber] = useState<string>('')
    useEffect(()=>{
        if(children && max){
            setMaxNumber(`+${children.length - max  + 1}`)
        }
    },[max])

    useEffect(()=>{
        if(children && total){
            setTotalNumber(`+${total- children.length }`)
        }
    },[total])

    return(<>
        <AvatarGroupWrapper>
            {   max === undefined && total === undefined ?
                    children.map((el, index)=>{
                    return <WrapperElement index = {index * -1}>{el}</WrapperElement>
                    })
            
                : null
            }

            {   max ?
                    <>
                        {children.map((el, index)=>{
                            if(index < (max - 1))
                            return <WrapperElement index = {index * -1}>{el}</WrapperElement>
                        })}
                        <WrapperElement index = {-1 * max}>
                            <Avatar color='#00000040' >
                                {maxNumber}
                            </Avatar>
                        </WrapperElement>

                    </>
                : null
            }

            {   total ?
                    <>
                        {children.map((el, index)=>{
                            return <WrapperElement index = {index * -1}>{el}</WrapperElement>
                        })}
                        <WrapperElement index = {-1 * total}>
                            <Avatar color='#00000040' >
                                {totalNumber}
                            </Avatar>
                        </WrapperElement>

                    </>
                : null
            }
        </AvatarGroupWrapper>
    </>
)}

export default AvatarGroup