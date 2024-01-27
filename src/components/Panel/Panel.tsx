import { PanelProps } from '../../types/data'

interface withChildren extends PanelProps {
	children?: React.ReactNode
}

import cl from './Panel.module.css'
export const Panel: React.FC<withChildren> = ({
	children,
	width,
	height,
	visible,
}) => {
	return (
		<div
			className={cl.panel}
			style={{ width, height, display: visible ? 'block' : 'none' }}
		>
			{children}
		</div>
	)
}
