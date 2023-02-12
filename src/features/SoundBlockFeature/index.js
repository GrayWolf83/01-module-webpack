import { SoundBlock, Audio } from '@src/entities'
import { data } from '@src/shared'

class SoundBlockFeature {
	#soundBlock

	constructor(bg, icon, page) {
		this.#soundBlock = new SoundBlock(bg, icon)

		this.#soundBlock.toHtml().onclick = () => {
			const current = data.find((item) => item.bg === bg)
			Object.keys(Audio).forEach((item) => {
				if (current.name === item) {
					Audio[item].paused
						? Audio[item].play()
						: Audio[item].pause()
				} else {
					Audio[item].pause()
				}
			})
			page.style.backgroundImage = `url(${bg})`
		}
	}

	toHtml() {
		return this.#soundBlock.toHtml()
	}
}

export default SoundBlockFeature
