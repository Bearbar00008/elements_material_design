import React, { useContext } from "react"
import { Data } from "../InputGroup";
import Radio from "../../Radio";
import Checkbox from "../../Checkbox/Checkbox";
import Switch from "../../Switch";
import { ContextData } from "../types"


interface RadioGroupElementType {
    label: string
    id?: string
    value: string
    disabled?: boolean
}

const InputGroupElement: React.FC<RadioGroupElementType> = ({label, id, value, disabled}) =>{

    const data: ContextData = useContext(Data);

    
    return(<>
            {data.type === 'radio' && 
                <Radio 
                    label={label}  
                    id ={id} 
                    value={value} 
                    disabled ={disabled}
                    color={data.color}
                    name={data.name}
                    fullWidth = {data.fullWidth}
                    checked = {data.checked as string}
                    onChange ={data.onChange}
                    labelPosition={data.labelPosition}
                    size={data.size}
                />
            }
            

            {data.type === 'checkbox' &&
                <Checkbox 
                    label={label}  
                    id ={id} 
                    value={value} 
                    disabled ={disabled}
                    color={data.color}
                    name={data.name}
                    fullWidth = {data.fullWidth}
                    checked = {data.checked as string []}
                    onChange ={data.onChange}
                    labelPosition={data.labelPosition}
                    size={data.size}
                />
            }

            {data.type === 'switch' &&
                <Switch 
                    label={label}  
                    id ={id} 
                    value={value} 
                    disabled ={disabled}
                    color={data.color}
                    name={data.name}
                    fullWidth = {data.fullWidth}
                    checked = {data.checked as string []}
                    onChange ={data.onChange}
                    labelPosition={data.labelPosition}
                    size={data.size}
                />
            }
    </>
)}

export default InputGroupElement