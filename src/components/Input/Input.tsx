import cl from './Input.module.css'

interface InputProps {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	caption: string
	required?: boolean
}

export const Input: React.FC<InputProps> = ({ caption, ...props }) => {
	return (
		<label className={cl.label}>
			<span>{caption}</span>
			<input {...props} className={cl.input} type="text" />
		</label>
	)
}
