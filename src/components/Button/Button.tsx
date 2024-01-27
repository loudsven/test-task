import { ButtonProps } from '../../types/data'

export const Button: React.FC<ButtonProps> = ({
	caption,
	width,
	height,
	visible,
}) => {
	return (
		<button style={{ width, height, display: visible ? 'block' : 'none' }}>
			{caption}
		</button>
	)
}
