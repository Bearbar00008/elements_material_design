type HEX = `#${string}`


export interface ContextData {
    type: 'radio' | 'checkbox'
    name: string
    defaultValue?: string
    color?: HEX
    labelPosition?: 'left' | 'right'
    size?: "small" | "medium" | "large"
    fullWidth?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    checked: string | string []
}