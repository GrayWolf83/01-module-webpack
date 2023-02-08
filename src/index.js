import App from '@app'

const root = document.querySelector('#root')
const app = new App()

root.append(app.toHtml())
