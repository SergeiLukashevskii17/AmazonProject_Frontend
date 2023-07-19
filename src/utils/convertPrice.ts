export const isFloat = (number: number) => !!Number.isInteger(number)

export const convertPrice = (price: number | string) => {
	// just for seed ( faker create price like a $... string)
	if (typeof price === 'string') return price
	return `$${isFloat(price) ? price.toFixed(2) : price}`
}
