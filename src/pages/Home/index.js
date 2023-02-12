import { SoundBlockListModule } from '@src/modules'
import { Utils } from '@src/shared'
import { AudioPlayer } from '@src/entities'
import { ChangeVolumeFeature } from '@src/features'
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
		this.#SoundBlockListModule = new SoundBlockListModule(this.#page)
		this.#changeVolume = new ChangeVolumeFeature()

		this.#page.append(
			this.#title,
			this.#SoundBlockListModule.toHtml(),
			this.#changeVolume.toHtml(),
		)
	}

	toHtml() {
		return this.#page
	}
}

export default HomePage
