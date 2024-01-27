import { Main } from '../Main/Main'
import { Header } from '../Header/Header'

import cl from './App.module.css'
import { useContent } from './useContent'

export const App = () => {
	const { content, update } = useContent()
	return (
		<div className={cl.app}>
			<Header submit={update} />
			<Main content={content} />
		</div>
	)
}
