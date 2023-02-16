function createElement(
	tagName: string,
	attrs?: { [key: string]: string | number | object },
): HTMLElement {
	const elem: any = document.createElement(tagName)

	if (attrs && elem) {
		Object.keys(attrs).forEach((key) => {
			elem[key] = attrs[key]
		})
	}

	return elem
}

export default {
	createElement,
}
