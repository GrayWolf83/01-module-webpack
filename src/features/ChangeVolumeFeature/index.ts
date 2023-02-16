import { InputVolume, AudioPlayers } from '@src/entities'
import { Component } from '@src/shared/models'

class ChangeVolumeFeature implements Component {
	private inputVolume

	constructor() {
		this.inputVolume = new InputVolume()
		Object.keys(AudioPlayers).forEach((item) => {
			AudioPlayers[item].volume = 0.5
		})
		this.inputVolume.toHtml().oninput = (
			e: Event & { target: HTMLInputElement },
		) =>
			Object.keys(AudioPlayers).forEach((item) => {
				AudioPlayers[item].volume = Number(e.target.value)
			})
	}

	toHtml(): HTMLElement {
		return this.inputVolume.toHtml()
	}
}

export default ChangeVolumeFeature
