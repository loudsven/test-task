import { ContentItem } from '../../types/data'
import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import { Panel } from '../Panel/Panel'
import cl from './Main.module.css'

interface MainProps {
	content: ContentItem[]
}

export const Main: React.FC<MainProps> = ({ content }) => {
	const map = renderContent(content)

	return (
		<div className={cl.content}>
			{map.map((item, index) => {
				return item
			})}
		</div>
	)
}

const renderContent = (content: ContentItem[]) => {
	return content.map((item, index) => {
		if (item.type === 'panel') {
			if (item.content) {
				return (
					<Panel key={index} {...item.props}>
						{renderContent(item.content)}
					</Panel>
				)
			}
			return <Panel key={index} {...item.props} />
		} else if (item.type === 'label') {
			return <Label key={index} {...item.props} />
		} else if (item.type === 'button') {
			return <Button key={index} {...item.props} />
		}
	})
}
