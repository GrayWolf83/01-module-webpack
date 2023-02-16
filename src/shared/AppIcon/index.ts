import Utils from '@src/shared/Utils'
import './styles.scss'

const AppIcon = (icon: string): HTMLElement =>
	Utils.createElement('img', { src: icon, className: 'icon' })

export default AppIcon
