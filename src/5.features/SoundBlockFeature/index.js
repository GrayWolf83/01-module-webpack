import SoundBlock from '@entities/SoundBlock'

class SoundBlockFeature {
	#soundBlock

	constructor(bg, icon, sound, player) {
		this.#soundBlock = new SoundBlock(bg, icon, sound)
		this.#soundBlock.toHtml().onclick = () => {
			const currentSound = player.getSound()
			player.setSound =
				currentSound && currentSound === sound ? '' : sound
		}
	}

	toHtml() {
		return this.#soundBlock.toHtml()
	}
}

export default SoundBlockFeature
