import { SoundBlockFeature } from '@src/features'
import { AppIcon, Utils, data } from '@src/shared'
import './styles.scss'

class SoundBlockListModule {
	#SoundBlockList

	constructor(page) {
		this.#SoundBlockList = Utils.createElement('div', {
			className: 'sounds-block',
		})

		data.forEach((item) => {
			this.#SoundBlockList.append(
				new SoundBlockFeature(
					item.bg,
					AppIcon(item.icon),
					page,
				).toHtml(),
			)
		})
	}

	toHtml() {
		return this.#SoundBlockList
	}
}

export default SoundBlockListModule
