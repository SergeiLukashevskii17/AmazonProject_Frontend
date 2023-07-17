import { axiosAuth } from '@/api/api.interceptor'
import { FullUser } from '@/types/user.interface'

export const getUserByToken = async () => {
	const responce = await axiosAuth<FullUser>({
		url: `/user`,
		method: 'GET'
	})

	return responce
}
