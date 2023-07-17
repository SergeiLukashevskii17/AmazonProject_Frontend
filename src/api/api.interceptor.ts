import axios from 'axios'
import { errorCatch, getContentType } from './api.helper'
import {
	getAccessToken,
	removeUserFromStorage
} from '@/services/auth/auth.helper'
import { JwtErrors } from '@/types/common'
import { AuthService } from '@/services/auth/auth.service'

const axiosAuth = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: getContentType()
})

axiosAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

axiosAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		const invalidToken =
			error.response?.status === 401 ||
			errorCatch(error) === JwtErrors.expired ||
			errorCatch(error) === JwtErrors.unprovided

		if (invalidToken && error.config && !error.config._isRetry) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()
				return axiosAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === JwtErrors.expired) {
					removeUserFromStorage()
				}
			}
		}
	}
)

export { axiosAuth }
