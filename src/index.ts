import App from '@src/app'

const root = document.querySelector('#root') as HTMLElement
const app = new App()

root.append(app.toHtml())
