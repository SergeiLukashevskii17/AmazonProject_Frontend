import { getUserByToken } from '@/api/requests/user/getUserByToken'
import { updateUser } from '@/api/requests/user/updateUser'
import { updateUserFavorites } from '@/api/requests/user/updateUserFavorites'
import { ToggleFavoritesType, UpdateUserType } from '@/types/user.interface'

export const UserService = {
	async getCurrentUser() {
		return getUserByToken()
	},

	async update(data: UpdateUserType) {
		return updateUser(data)
	},

	async updateFavorites(id: number, data: ToggleFavoritesType) {
		return updateUserFavorites(id, data)
	}
}
