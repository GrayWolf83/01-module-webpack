import { HomePage } from '@src/pages'
import { Component } from '@src/shared/models'
import './index.scss'

class App implements Component {
	private homePage

	constructor() {
		this.homePage = new HomePage()
	}

	toHtml(): HTMLElement {
		return this.homePage.toHtml()
	}
}

export default App
