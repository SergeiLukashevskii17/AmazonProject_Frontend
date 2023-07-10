import { getUserById } from '@/api/requests/user/getUserById'
import { updateUser } from '@/api/requests/user/updateUser'
import { updateUserFavorites } from '@/api/requests/user/updateUserFavorites'
import { ToggleFavoritesType, UpdateUserType } from '@/types/user.interface'

export const UserService = {
	async getById(id: number) {
		return getUserById(id)
	},

	async update(data: UpdateUserType) {
		return updateUser(data)
	},

	async updateFavorites(id: number, data: ToggleFavoritesType) {
		return updateUserFavorites(id, data)
	}
}
