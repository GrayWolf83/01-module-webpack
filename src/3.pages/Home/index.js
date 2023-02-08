import SoundBlockListModule from '@modules/SoundBlockListModule'
import { Utils } from '@shared'
import { AudioPlayer } from '@entities'
import ChangeVolumeFeature from '@features/ChangeVolumeFeature'
import './styles.scss'

class HomePage {
	#page
	#title
	#SoundBlockListModule
	#player
	#changeVolume

	constructor() {
		this.#page = Utils.createElement('div', {
			className: 'bg',
		})
		this.#title = Utils.createElement('h1', {
			className: 'title',
			textContent: 'Weather sounds',
		})
		this.#player = new AudioPlayer()
		this.#SoundBlockListModule = new SoundBlockListModule(this.#player)
		this.#changeVolume = new ChangeVolumeFeature(this.#player)

		this.#page.append(
			this.#title,
			this.#SoundBlockListModule.toHtml(),
			this.#player.toHtml(),
			this.#changeVolume.toHtml(),
		)
	}

	toHtml() {
		return this.#page
	}
}

export default HomePage
