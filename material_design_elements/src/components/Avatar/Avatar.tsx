import styled from "styled-components"
import React from 'react'

interface AvatarWrapper{
    width?: number
    variant?: 'square' | 'circle'
    color?: string
}

const AvatarWrapper =  styled.div<AvatarWrapper>`
    width: ${props => props.width ? props.width : '2' }vw;
    height: ${props => props.width ? props.width : '2' }vw;
    overflow: hidden;
    background-color: ${props => props.color};
    border-radius: ${props => props.variant === 'circle' ? '50%' : '0%'};
    display: flex;

    @media (max-width: 480px) {
        width: ${props => props.width ? props.width : '7' }vw;
        height: ${props => props.width ? props.width : '7' }vw;
    }
`

interface AvatarImgType{
    variant?: 'square' | 'circle'
}

const AvatarImg = styled.img<AvatarImgType>`
    object-position: center;
    object-fit:cover;
    width: 100%;
    height: 100%;
    border-radius:inherit;
`

const TextWrapper = styled.span`
    font-family: Arial, sans-serif;
    text-transform: capitalize;
    color: white;
    font-weight: 500;
    font-size: 0.9vw;
    margin: 0; 

    @media (max-width: 480px) {
        font-size: 3.5vw;
    }

`

const Center = styled.span`
    margin: auto;
    width: inherit:
    height: inherit;
`

type HEX = `#${string}`

interface AvatarType{
    alt?: string
    src?: string
    color?: HEX
    children?: string | JSX.Element 
    width?: number
    variant?: 'square' | 'circle'
}

const Avatar: React.FC<AvatarType> = ({alt, src, color ='white', children, width, variant='circle'}) =>{

    
    return(<>
        <AvatarWrapper
            width={width}
            variant={variant}
            color={color}
        >
            { src && 
                <AvatarImg 
                    alt={alt} 
                    src={src} 
                    variant={variant} 
                />
            }

            { typeof(children) === 'string' &&
                <Center>
                    <TextWrapper>
                        {children}
                    </TextWrapper>
                </Center>
            }

            { typeof(children) === 'object' &&
                <Center>
                    {children}
                </Center>
            }

        </AvatarWrapper>
    </>
)}

export default Avatar