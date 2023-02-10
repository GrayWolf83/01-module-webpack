import { HomePage } from '@src/pages'
import './index.scss'

class App {
	#homePage

	constructor() {
		this.#homePage = new HomePage()
	}

	toHtml() {
		return this.#homePage.toHtml()
	}
}

export default App
