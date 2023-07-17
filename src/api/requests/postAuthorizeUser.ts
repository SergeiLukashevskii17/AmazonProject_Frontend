import { AuthResponce, EmailPassword } from '@/store/user/user.interface'
import { AuthVariants } from '@/types/common'
import { axiosAuth } from '../api.interceptor'

export const postAuthorizeUser = async (type: AuthVariants, data: EmailPassword) => {
	const responce = await axiosAuth<AuthResponce>({
		url: `/auth/${type}`,
		method: 'POST',
		data
	})

	return responce
}
