import { Utils } from '@src/shared'
import { Component } from '@src/shared/models'
import './styles.scss'

class InputVolume implements Component {
	private input

	constructor() {
		this.input = Utils.createElement('input', {
			type: 'range',
			min: 0.0,
			max: 1.0,
			step: 0.1,
			value: 0.5,
			className: 'volume',
		}) as HTMLInputElement
	}

	toHtml(): HTMLInputElement {
		return this.input
	}
}

export default InputVolume
