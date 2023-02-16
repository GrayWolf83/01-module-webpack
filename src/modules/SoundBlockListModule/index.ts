import { SoundBlockFeature } from '@src/features'
import { AppIcon, Utils, data } from '@src/shared'
import { Component } from '@src/shared/models'
import './styles.scss'

class SoundBlockListModule implements Component {
	private SoundBlockList

	constructor(page: HTMLElement) {
		this.SoundBlockList = Utils.createElement('div', {
			className: 'sounds-block',
		})

		data.forEach((item) => {
			this.SoundBlockList.append(
				new SoundBlockFeature(
					item.bg,
					AppIcon(item.icon),
					page,
				).toHtml(),
			)
		})
	}

	toHtml(): HTMLElement {
		return this.SoundBlockList
	}
}

export default SoundBlockListModule
