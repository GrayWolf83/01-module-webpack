import App from '@app'
import './index.scss'

const root = document.querySelector('#root')
const app = new App()

root.append(app.toHtml())
