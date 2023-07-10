import { axiosAuth } from '@/api/api.interceptor'
import { DeleteReviewType, Review } from '@/types/review.interface'

export const deleteReview = async (data: DeleteReviewType) => {
	const responce = await axiosAuth<Review>({
		url: `/review`,
		method: 'DELETE',
		data
	})

	return responce
}
