import { InputVolume, Audio } from '@src/entities'

class ChangeVolumeFeature {
	#inputVolume

	constructor() {
		this.#inputVolume = new InputVolume()
		Object.keys(Audio).forEach((item) => {
			Audio[item].volume = 0.5
		})
		this.#inputVolume.toHtml().oninput = (e) =>
			Object.keys(Audio).forEach((item) => {
				Audio[item].volume = e.target.value
			})
	}

	toHtml() {
		return this.#inputVolume.toHtml()
	}
}

export default ChangeVolumeFeature
