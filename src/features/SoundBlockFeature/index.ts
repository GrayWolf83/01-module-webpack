import { SoundBlock, Audio } from '@src/entities'
import { data, AppIcon } from '@src/shared'
import iconPause from '@src/shared/assets/icons/pause.svg'
import { Component } from '@src/shared/models'

class SoundBlockFeature implements Component {
	private soundBlock

	constructor(bg: string, icon: HTMLElement, page: HTMLElement) {
		this.soundBlock = new SoundBlock(bg, icon)

		this.soundBlock.toHtml().onclick = () => {
			const current = data.find((item) => item.bg === bg)
			const soundBlocks = document.querySelectorAll('.sounds-block__item')
			soundBlocks.forEach((item: HTMLElement) => {
				const dataItem = data.find((itm) =>
					item.style.backgroundImage.includes(itm.bg),
				)
				item.innerHTML = ''
				item.append(AppIcon(dataItem.icon))
			})
			Object.keys(Audio).forEach((item) => {
				if (current.name === item) {
					if (Audio[item].paused) {
						Audio[item].play()
						this.soundBlock.toHtml().innerHTML = ''
						this.soundBlock.toHtml().append(AppIcon(iconPause))
					} else {
						Audio[item].pause()
					}
				} else {
					Audio[item].pause()
				}
			})
			page.style.backgroundImage = `url(${bg})`
		}
	}

	toHtml(): HTMLElement {
		return this.soundBlock.toHtml()
	}
}

export default SoundBlockFeature
