import SoundBlockFeature from '@features/SoundBlockFeature'
import { AppIcon, Utils, data } from '@shared'
import './styles.scss'

class SoundBlockListModule {
	#SoundBlockList

	constructor(player) {
		this.#SoundBlockList = Utils.createElement('div', {
			className: 'sounds-block',
		})

		data.forEach((item) => {
			this.#SoundBlockList.append(
				new SoundBlockFeature(
					item.bg,
					AppIcon(item.icon),
					item.sound,
					player,
				).toHtml(),
			)
		})
	}

	toHtml() {
		return this.#SoundBlockList
	}
}

export default SoundBlockListModule
