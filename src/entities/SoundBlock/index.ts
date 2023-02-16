import { Utils } from '@src/shared'
import { Component } from '@src/shared/models'
import './styles.scss'

class SoundBlock implements Component {
	private soundBlock

	constructor(bg: string, icon: HTMLElement) {
		this.soundBlock = Utils.createElement('div', {
			className: 'sounds-block__item',
		})
		this.soundBlock.style.backgroundImage = `url(${bg})`
		this.soundBlock.append(icon)
	}

	toHtml(): HTMLElement {
		return this.soundBlock
	}
}

export default SoundBlock
