import Utils from '@shared/Utils'

class AudioPlayer {
	#audio

	constructor() {
		this.#audio = Utils.createElement('audio', {
			autoplay: true,
			className: 'player',
			volume: 0.5,
		})
	}

	set setSound(sound) {
		this.#audio.src = sound
	}

	getSound() {
		return this.#audio.src
	}

	set setVolume(volume) {
		this.#audio.volume = volume
	}

	toHtml() {
		return this.#audio
	}
}

export default AudioPlayer
