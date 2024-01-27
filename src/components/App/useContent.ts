import { useState } from 'react'
import { ContentItem } from '../../types/data'
import { deepClone, setWithoutCreate, stringToNumber } from '../../utils/utils'

export const useContent = () => {
	const [content, setContent] = useState<ContentItem[]>(initialContent)

	const update = (path: string, value: string) => {
		const temp: { content: ContentItem[] } = { content: deepClone(content) }
		setWithoutCreate(temp, path, stringToNumber(value))
		setContent(temp.content)
	}

	return {
		content,
		update,
	}
}

const initialContent: ContentItem[] = [
	{
		type: 'panel',
		props: {
			width: 100,
			height: 100,
			visible: true,
		},
		content: [
			{
				type: 'button',
				props: {
					width: 90,
					height: 60,
					caption: 'Справка',
					visible: true,
				},
			},
		],
	},
	{
		type: 'panel',
		props: {
			width: 120,
			height: 300,
			visible: true,
		},
		content: [
			{
				type: 'label',
				props: {
					caption: 'Черепаха',
					visible: true,
				},
			},
			{
				type: 'button',
				props: {
					width: 95,
					height: 30,
					caption: 'Подробнее',
					visible: true,
				},
			},
			{
				type: 'button',
				props: {
					width: 160,
					height: 70,
					caption: 'Назад',
					visible: true,
				},
			},
			{
				type: 'panel',
				props: {
					width: 100,
					height: 100,
					visible: true,
				},
				content: [
					{
						type: 'label',
						props: {
							caption: 'Подводный мир',
							visible: true,
						},
					},
				],
			},
		],
	},
]
