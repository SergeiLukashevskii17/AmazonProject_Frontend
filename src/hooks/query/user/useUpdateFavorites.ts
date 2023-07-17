import { UserService } from '@/services/user/user.service'
import { ToggleFavoritesType } from '@/types/user.interface'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../../../pages/_app'

export const useUpdateFavorites = (id: number, data: ToggleFavoritesType) => {
	const {
		mutate: mutateUpdateFavorites,
		data: favorites,
		isLoading: isFavoritesLoading
	} = useMutation(
		['updateFavorites'],
		() => UserService.updateFavorites(id, data),
		{
			onSuccess() {
				queryClient.invalidateQueries(['getProfile'])
			}
		}
	)

	return { mutateUpdateFavorites, favorites, isFavoritesLoading }
}
