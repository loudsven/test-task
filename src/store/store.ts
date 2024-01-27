import { configureStore } from '@reduxjs/toolkit'
import contentReducer from '../features/content/contentSlice'

const store = configureStore({
	reducer: contentReducer,
})

export default store
