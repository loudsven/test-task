import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from '../Button/Button'
import { Input } from '../Input/Input'

import cl from './Header.module.css'
import { update, addContentItem } from '../../features/content/contentSlice'

export const Header = () => {
	const [path, setPath] = useState('')
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const pathHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setPath(e.target.value)
	}

	const valueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value)
	}

	const submitHandler: React.FormEventHandler = (e) => {
		e.preventDefault()
		if (path !== '') {
			dispatch(update({ path, value }))
		} else {
			dispatch(addContentItem(value))
		}
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
