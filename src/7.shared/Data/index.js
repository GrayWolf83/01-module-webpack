import summerBg from '@public/images/summer-bg.jpg'
import summerSound from '@public/sounds/summer.mp3'
import summerIcon from '@public/icons/sun.svg'
import rainBg from '@public/images/rainy-bg.jpg'
import rainSound from '@public/sounds/rain.mp3'
import rainIcon from '@public/icons/cloud-rain.svg'
import winterBg from '@public/images/winter-bg.jpg'
import winterSound from '@public/sounds/winter.mp3'
import winterIcon from '@public/icons/cloud-snow.svg'

export default [
	{
		id: 1,
		icon: summerIcon,
		bg: summerBg,
		sound: summerSound,
	},
	{
		id: 2,
		icon: rainIcon,
		bg: rainBg,
		sound: rainSound,
	},
	{
		id: 3,
		icon: winterIcon,
		bg: winterBg,
		sound: winterSound,
	},
]
