import { axiosAuth } from '@/api/api.interceptor'
import { Review } from '@/types/review.interface'

export const getAllReviews = async () => {
	const responce = await axiosAuth<Review[]>({
		url: `/review`,
		method: 'GET'
	})

	return responce
}
