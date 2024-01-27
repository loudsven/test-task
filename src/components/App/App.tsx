import { Main } from '../Main/Main'
import { Header } from '../Header/Header'

import cl from './App.module.css'

export const App = () => {
	return (
		<div className={cl.app}>
			<Header />
			<Main />
		</div>
	)
}
