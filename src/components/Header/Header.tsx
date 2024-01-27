import { useState } from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'

import cl from './Header.module.css'

interface HeaderProps {
	submit: (path: string, value: string) => void
}

export const Header: React.FC<HeaderProps> = ({ submit }) => {
	const [path, setPath] = useState('')
	const [value, setValue] = useState('')

	const pathHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setPath(e.target.value)
	}

	const valueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value)
	}

	const submitHandler: React.FormEventHandler = (e) => {
		e.preventDefault()
		submit(path, value)
	}

	return (
		<form onSubmit={submitHandler} className={cl.header}>
			<Input value={path} onChange={pathHandler} caption="Путь" />
			<Input
				value={value}
				onChange={valueHandler}
				required={true}
				caption="Новое значение"
			/>
			<Button width={120} height={24} visible={true} caption="Применить" />
		</form>
	)
}
