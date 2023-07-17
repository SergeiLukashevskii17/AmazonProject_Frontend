export const isFloat = (number: number) => !!Number.isInteger(number)

export const convertPrice = (price: number) => {
	return `$${isFloat(price) ? price.toFixed(2) : price}`
}
