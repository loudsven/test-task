import { useSelector } from 'react-redux'
import { ContentItem } from '../../types/data'
import { selectContent } from '../../features/content/contentSlice'
import { Button } from '../Button/Button'
import { Label } from '../Label/Label'
import { Panel } from '../Panel/Panel'

import cl from './Main.module.css'

export const Main = () => {
	const content = useSelector(selectContent)
	const mappedContent = mapContent(content)

	return <div className={cl.content}>{mappedContent.map((item) => item)}</div>
}

const mapContent = (content: ContentItem[]) => {
	return content.map((item, index) => {
		if (item.type === 'panel') {
			if (item.content) {
				return (
					<Panel key={index} {...item.props}>
						{mapContent(item.content)}
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
