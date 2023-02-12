import data from '../../shared/Data'

export default data.reduce(
	(acc, item) => Object.assign(acc, { [item.name]: new Audio(item.sound) }),
	{},
)
