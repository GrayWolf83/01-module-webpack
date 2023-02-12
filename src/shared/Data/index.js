import summerBg from '../assets/images/summer-bg.jpg'
import summerSound from '../assets/sounds/summer.mp3'
import summerIcon from '../assets/icons/sun.svg'
import rainBg from '../assets/images/rainy-bg.jpg'
import rainSound from '../assets/sounds/rain.mp3'
import rainIcon from '../assets/icons/cloud-rain.svg'
import winterBg from '../assets/images/winter-bg.jpg'
import winterSound from '../assets/sounds/winter.mp3'
import winterIcon from '../assets/icons/cloud-snow.svg'

export default [
	{
		id: 1,
		icon: summerIcon,
		bg: summerBg,
		sound: summerSound,
		name: 'summer',
	},
	{
		id: 2,
		icon: rainIcon,
		bg: rainBg,
		sound: rainSound,
		name: 'rain',
	},
	{
		id: 3,
		icon: winterIcon,
		bg: winterBg,
		sound: winterSound,
		name: 'winter',
	},
]
