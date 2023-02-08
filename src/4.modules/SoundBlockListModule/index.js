import SoundBlockFeature from '@features/SoundBlockFeature'
import summerBg from '@public/images/summer-bg.jpg'
import summerSound from '@public/sounds/summer.mp3'
import summerIcon from '@public/icons/sun.svg'
import rainBg from '@public/images/rainy-bg.jpg'
import rainSound from '@public/sounds/rain.mp3'
import rainIcon from '@public/icons/cloud-rain.svg'
import winterBg from '@public/images/winter-bg.jpg'
import winterSound from '@public/sounds/winter.mp3'
import winterIcon from '@public/icons/cloud-snow.svg'
import { AppIcon, Utils } from '@shared'
import './styles.scss'

class SoundBlockListModule {
	#SoundBlockList
	#summerSoundFeature
	#rainSoundFeature
	#winterSoundFeature

	constructor(player) {
		this.#SoundBlockList = Utils.createElement('div', {
			className: 'sounds-block',
		})

		this.#summerSoundFeature = new SoundBlockFeature(
			summerBg,
			AppIcon(summerIcon),
			summerSound,
			player,
		)
		this.#rainSoundFeature = new SoundBlockFeature(
			rainBg,
			AppIcon(rainIcon),
			rainSound,
			player,
		)
		this.#winterSoundFeature = new SoundBlockFeature(
			winterBg,
			AppIcon(winterIcon),
			winterSound,
			player,
		)
		this.#SoundBlockList.append(
			this.#summerSoundFeature.toHtml(),
			this.#rainSoundFeature.toHtml(),
			this.#winterSoundFeature.toHtml(),
		)
	}

	toHtml() {
		return this.#SoundBlockList
	}
}

export default SoundBlockListModule
