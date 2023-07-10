import { axiosAuth } from '@/api/api.interceptor'
import { Review, UpdateReviewType } from '@/types/review.interface'

export const updateReview = async (
	data: UpdateReviewType
) => {
	const responce = await axiosAuth<Review>({
		url: `/review`,
		method: 'PUT',
		data
	})

	return responce
}
