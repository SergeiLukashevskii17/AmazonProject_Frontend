import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useGetProfile } from '@/hooks/query/user/useGetProfile'
import { ToggleFavoritesActions } from '@/types/user.interface'
import { useUpdateFavorites } from '@/hooks/query/user/useUpdateFavorites'
import { Spin } from 'antd'

export const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { userProfile, isUserProfileLoading } = useGetProfile()

	console.log(userProfile)

	const isFavorite = userProfile?.favorites.some(
		favorite => favorite.id === productId
	)

	const { mutateUpdateFavorites } = useUpdateFavorites(productId, {
		actionType: isFavorite
			? ToggleFavoritesActions.remove
			: ToggleFavoritesActions.add
	})

	if (!userProfile) return null

	return (
		<div>
			{isUserProfileLoading ? (
				<Spin />
			) : (
				<button
					onClick={() => mutateUpdateFavorites()}
					className='text-primary w-8 h-8 flex justify-center items-center'
				>
					{isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
				</button>
			)}
		</div>
	)
}
