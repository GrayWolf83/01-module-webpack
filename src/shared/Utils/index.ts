function createElement(
	tagName: string,
	attrs?: { [key: string]: string | number | object },
): HTMLElement {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
