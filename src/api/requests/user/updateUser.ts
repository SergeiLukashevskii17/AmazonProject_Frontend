import { axiosAuth } from '@/api/api.interceptor'
import { UpdateUserType, User } from '@/types/user.interface'

export const updateUser = async (data: UpdateUserType) => {
	const responce = await axiosAuth<User>({
		url: `/user`,
		method: 'PUT',
		data
	})

	return responce
}
