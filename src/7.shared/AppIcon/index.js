import Utils from '../Utils'
import './styles.scss'

const AppIcon = (icon) =>
	Utils.createElement('img', { src: icon, className: 'icon' })

export default AppIcon
