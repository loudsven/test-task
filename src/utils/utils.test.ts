import { describe, test, expect } from 'bun:test'
import { deepClone, setWithoutCreate } from './utils'

describe('Deep clone', () => {
	test('is not the same reference', () => {
		const obj = {
			a: {
				b: {
					c: [
						{
							d: 2,
						},
					],
				},
			},
		}
		const deepCloned = deepClone(obj)
		expect(deepCloned).not.toBe(obj)
	})

	test('is equal to the original', () => {
		const obj = {
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
								caption: 'Справка',
								visible: false,
							},
						},
					],
				},
			],
		}

		const deepCloned = deepClone(obj)
		expect(deepCloned).toEqual(obj)
	})
})

describe('Set Without Create', () => {
	test('primitive value in nested object', () => {
		const obj = {
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
								caption: 'Книга',
								visible: false,
							},
						},
					],
				},
			],
		}

		const CORRECT = {
			content: [
				{
					type: 'button',
					props: {
						width: 90,
						height: 60,
						caption: 'Стол',
						visible: true,
					},
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
								caption: 'Книга',
								visible: false,
							},
						},
					],
				},
			],
		}

		setWithoutCreate(obj, 'content[0].props.caption', 'Стол')
		expect(obj).toEqual(CORRECT)
	})

	test('dont creates new property', () => {
		const obj = {
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
		}

		const CORRECT = {
			content: [
				{
					type: 'button',
					props: {
						width: 90,
						height: 60,
						caption: 'Справка',
						visible: true,
						color: 'red',
					},
				},
			],
		}

		setWithoutCreate(obj, 'content[0].props.color', 'red')
		expect(obj).not.toEqual(CORRECT)
	})
})
