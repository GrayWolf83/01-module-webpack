import { Utils } from '@src/shared'
import './styles.scss'

class InputVolume {
	#input

	constructor() {
		this.#input = Utils.createElement('input', {
			type: 'range',
			min: 0.0,
			max: 1.0,
			step: 0.1,
			value: 0.5,
			className: 'volume',
		})
	}

	toHtml() {
		return this.#input
	}
}

export default InputVolume
