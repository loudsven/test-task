export const deepClone = (obj) => {
	if (obj === null || typeof obj !== 'object') {
		return obj
	}

	if (Array.isArray(obj)) {
		return obj.map((element) => deepClone(element))
	}
	return {
		...obj,
		...Object.fromEntries(
			Object.entries(obj).map(([key, value]) => [key, deepClone(value)]),
		),
	}
}

export const setByPath = (obj: AnyObject, path: string | string[], value) => {
	if (Object(obj) !== obj) return obj
	path = path.toString().match(/[^.[\]]+/g) || []
	let key = (path
		.slice(0, -1)
		.reduce(
			(a, c, i) =>
				Object(a[c]) === a[c]
					? a[c]
					: (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {}),
			obj,
		)[path[path.length - 1]] = value)
	return obj
}

export const setWithoutCreate = (
	obj: AnyObject,
	path: string | string[],
	value,
) => {
	if (Object(obj) !== obj) return obj

	path = path.toString().match(/[^.[\]]+/g) || []

	const lastIndex = path.length - 1

	path.reduce((acc, key, index) => {
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
