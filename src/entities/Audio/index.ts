import data from '@src/shared/Data'
import { IAudio } from '@src/shared/models'

const AudioPlayers: IAudio = data.reduce(
	(acc, item) => Object.assign(acc, { [item.name]: new Audio(item.sound) }),
	{},
)

export default AudioPlayers
