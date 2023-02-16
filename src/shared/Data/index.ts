import summerBg from '@src/shared/assets/images/summer-bg.jpg'
import summerSound from '@src/shared/assets/sounds/summer.mp3'
import summerIcon from '@src/shared/assets/icons/sun.svg'
import rainBg from '@src/shared/assets/images/rainy-bg.jpg'
import rainSound from '@src/shared/assets/sounds/rain.mp3'
import rainIcon from '@src/shared/assets/icons/cloud-rain.svg'
import winterBg from '@src/shared/assets/images/winter-bg.jpg'
import winterSound from '@src/shared/assets/sounds/winter.mp3'
import winterIcon from '@src/shared/assets/icons/cloud-snow.svg'

interface DataItem {
	id: number
	icon: string
	bg: string
	sound: string
	name: string
}

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
] as DataItem[]
