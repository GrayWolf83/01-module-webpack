import { SoundBlockListModule } from '@src/modules'
import { Utils } from '@src/shared'
import { ChangeVolumeFeature } from '@src/features'
import './styles.scss'
import { Component } from '@src/shared/models'

class HomePage implements Component {
	private page
	private title
	private SoundBlockListModule
	private changeVolume

	constructor() {
		this.page = Utils.createElement('div', {
			className: 'bg',
		})
		this.title = Utils.createElement('h1', {
			className: 'title',
			textContent: 'Weather sounds',
		})
		this.SoundBlockListModule = new SoundBlockListModule(this.page)
		this.changeVolume = new ChangeVolumeFeature()

		this.page.append(
			this.title,
			this.SoundBlockListModule.toHtml(),
			this.changeVolume.toHtml(),
		)
	}

	toHtml(): HTMLElement {
		return this.page
	}
}

export default HomePage
