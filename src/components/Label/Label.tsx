import { LabelProps } from '../../types/data'

export const Label: React.FC<LabelProps> = ({ caption, visible }) => {
	return <span style={{ display: visible ? 'inline' : 'none' }}>{caption}</span>
}
