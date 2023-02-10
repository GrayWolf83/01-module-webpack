import { Utils } from '@src/shared'
import './styles.scss'

class SoundBlock {
	#soundBlock

	constructor(bg, icon) {
		this.#soundBlock = Utils.createElement('div', {
			className: 'sounds-block__item',
		})
		this.#soundBlock.style.backgroundImage = `url(${bg})`
		this.#soundBlock.append(icon)
	}

	toHtml() {
		return this.#soundBlock
	}
}

export default SoundBlock
