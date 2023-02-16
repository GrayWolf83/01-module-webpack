import { InputVolume, Audio } from '@src/entities'
import { Component } from '@src/shared/models'

class ChangeVolumeFeature implements Component {
	private inputVolume

	constructor() {
		this.inputVolume = new InputVolume()
		Object.keys(Audio).forEach((item) => {
			Audio[item].volume = 0.5
		})
		this.inputVolume.toHtml().oninput = (e: any) =>
			Object.keys(Audio).forEach((item) => {
				Audio[item].volume = e.target.value
			})
	}

	toHtml(): HTMLElement {
		return this.inputVolume.toHtml()
	}
}

export default ChangeVolumeFeature
