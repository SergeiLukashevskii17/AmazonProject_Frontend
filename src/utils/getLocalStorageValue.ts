export const getLocalStorageValue = (key: string) => {
	if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
		const currentValue = localStorage.getItem(key)
		if (currentValue) return JSON.parse(currentValue)
	}
	return null
}
