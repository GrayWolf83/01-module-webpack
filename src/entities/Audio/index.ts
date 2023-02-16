import data from '@src/shared/Data'
import { Audio } from '@src/shared/models'

export default data.reduce(
	(acc, item) => Object.assign(acc, { [item.name]: new Audio(item.sound) }),
	{},
) as Audio
