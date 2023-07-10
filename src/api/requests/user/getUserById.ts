import { axiosAuth } from '@/api/api.interceptor'
import { User } from '@/types/user.interface'

export const getUserById = async (id: number) => {
	const responce = await axiosAuth<User>({
		url: `/user/${id}`,
		method: 'GET'
	})

	return responce
}
