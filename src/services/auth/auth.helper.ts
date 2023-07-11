import { AuthResponce, Tokens } from '@/store/user/user.interface'
import { TokensEnum, StorageKeys } from '@/types/common'
import Cookies from 'js-cookie'

export const getAccessToken = () => {
	const accessToken = Cookies.get(TokensEnum.access)
	return accessToken || null
}

export const getUserFromStorage = () => {
	return JSON.parse(localStorage.getItem(StorageKeys.user) || '{}')
}

export const setCookieTokens = (data: Tokens) => {
	Cookies.set(TokensEnum.access, data.accessToken)
	Cookies.set(TokensEnum.refresh, data.refreshToken)
}

export const removeUserFromStorage = () => {
	Cookies.remove(TokensEnum.access)
	Cookies.remove(TokensEnum.refresh)
	localStorage.removeItem(StorageKeys.user)
}

export const saveUserToStorage = (data: AuthResponce) => {
	setCookieTokens(data)
	localStorage.setItem(StorageKeys.user, JSON.stringify(data.user))
}
