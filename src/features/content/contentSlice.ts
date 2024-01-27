import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContentItem } from '../../types/data'
import { content } from './initialState'
import {
	deepClone,
	parseStringToJSON,
	setWithoutCreate,
	stringToNumber,
} from '../../utils/utils'

interface State {
	content: ContentItem[]
}

const initialState: State = {
	content,
}

const contentSlice = createSlice({
	name: 'content',
	initialState,
	reducers: {
		update: (state, action: PayloadAction<{ path: string; value: string }>) => {
			const temp: { content: ContentItem[] } = deepClone({
				content: state.content,
			})
			setWithoutCreate(
				temp,
				action.payload.path,
				stringToNumber(action.payload.value),
			)
			console.log(temp.content)
			state.content = temp.content
		},

		addContentItem: (state, action: PayloadAction<string>) => {
			const json = parseStringToJSON(action.payload)
			console.log('json', json)
			const newItem = JSON.parse(json)
			state.content.push(newItem)
		},
	},
})

export const { update, addContentItem } = contentSlice.actions

export const selectContent = (state: State) => state.content

export default contentSlice.reducer
