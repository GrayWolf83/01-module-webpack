import InputVolume from '@entities/InputVolume'

class ChangeVolumeFeature {
	#inputVolume

	constructor(player) {
		this.#inputVolume = new InputVolume()
		this.#inputVolume.toHtml().oninput = (e) =>
			(player.setVolume = e.target.value)
	}

	toHtml() {
		return this.#inputVolume.toHtml()
	}
}

export default ChangeVolumeFeature
