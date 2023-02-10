function createElement(tagName, attrs) {
	const elem = document.createElement(tagName)
	for (const key in attrs) {
		elem[key] = attrs[key]
	}
	return elem
}

export default {
	createElement,
}
