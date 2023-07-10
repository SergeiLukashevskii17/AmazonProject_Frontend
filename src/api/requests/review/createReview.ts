import { axiosAuth } from '@/api/api.interceptor'
import { CreateReviewType, Review } from '@/types/review.interface'

export const createReview = async (data: CreateReviewType) => {
	const responce = await axiosAuth<Review>({
		url: `/review`,
		method: 'POST',
		data
	})

	return responce
}
