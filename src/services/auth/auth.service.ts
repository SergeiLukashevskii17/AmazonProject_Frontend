import Cookies from 'js-cookie'
import axios from 'axios'
import { AuthResponce, EmailPassword } from '@/store/user/user.interface'
import { getContentType } from '@/api/api.helper'
import { saveUserToStorage } from './auth.helper'
import { AuthVariants, TokensEnum } from '@/types/common'
import { postAuthorizeUser } from '@/api/requests/postAuthorizeUser'

export const AuthService = {
	async authorize(type: AuthVariants, data: EmailPassword) {
		const response = await postAuthorizeUser(type, data)

		if (response.data.accessToken) {
			saveUserToStorage(response.data)
		}

		return response.data
	},

	async getNewTokens() {
		const refreshToken = Cookies.get(TokensEnum.refresh)

		const response = await axios.post<
			string,
			{
				data: AuthResponce
			}
		>(
			process.env.SERVER_URL + '/auth/login/access-token',
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) saveUserToStorage(response.data)

		return response
	}
}
