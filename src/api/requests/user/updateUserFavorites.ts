import { axiosAuth } from '@/api/api.interceptor'
import { ToggleFavoritesType, User } from '@/types/user.interface'

export const updateUserFavorites = async (
	id: number,
	data: ToggleFavoritesType
) => {
	const responce = await axiosAuth<User>({
		url: `/user/favorites/${id}`,
		method: 'PUT',
		data
	})

	return responce
}
