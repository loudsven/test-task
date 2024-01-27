export const deepClone = <T>(obj: T): T => {
	if (obj === null || typeof obj !== 'object') {
		return obj
	}

	if (Array.isArray(obj)) {
		return obj.map((element) => deepClone(element)) as T
	}
	return {
		...obj,
		...Object.fromEntries(
			Object.entries(obj).map(([key, value]) => [key, deepClone(value)]),
		),
	}
}

export const setWithoutCreate = (obj: any, path: string, value: any) => {
	if (Object(obj) !== obj) return obj

	const keys = path.match(/[^.[\]]+/g) || []

	const lastIndex = keys.length - 1

	keys.reduce((acc, key, index) => {
		if (index === lastIndex && acc.hasOwnProperty(key)) {
			acc[key] = value
		} else {
			if (!acc.hasOwnProperty(key) || Object(acc[key]) !== acc[key]) {
				return acc
			}
			acc = acc[key]
		}
		return acc
	}, obj)

	return obj
}

export const stringToNumber = (value: string) => {
	if (Number.isNaN(Number(value))) {
		return value
	}
	return Number(value)
}

export function parseStringToJSON(input: string): any {
	return input.replace(/(?<!")\b([a-z]+)\b(?!")/g, '"$1"')
}
