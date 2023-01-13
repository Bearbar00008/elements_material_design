import React, { createContext } from "react"
import { ContextData } from "./types"

const data: ContextData ={
    name:'',
    type: 'radio',
    onChange: () => null,
    checked: ''
}

export const Data = createContext<ContextData>(data)

type HEX = `#${string}`

export interface InputGroupType {
    type: 'radio' | 'checkbox'  | 'switch'
    name: string
    defaultValue?: string
    children: JSX.Element [] | JSX.Element
    color?: HEX
    labelPosition?: 'left' | 'right'
    size?: "small" | "medium" | "large"
    fullWidth?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    checked: string | string []
}

const InputGroup: React.FC<InputGroupType> = ({name, defaultValue, children, color, labelPosition, size, fullWidth,checked,  onChange, type}) =>{

    return(<>

        <Data.Provider value={{
            name: name, 
            defaultValue: defaultValue, 
            onChange: onChange,
            color: color,
            labelPosition: labelPosition,
            size: size,
            fullWidth: fullWidth,
            checked: checked,
            type: type
        }}>
            {children}
        </Data.Provider>
    </>
)}

export default InputGroup