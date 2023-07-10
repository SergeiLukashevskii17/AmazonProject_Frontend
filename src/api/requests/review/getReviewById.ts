import { axiosAuth } from '@/api/api.interceptor'
import { Review } from '@/types/review.interface'

export const getReviewById = async (id: number) => {
	const responce = await axiosAuth<Review>({
		url: `/review/${id}`,
		method: 'GET'
	})

	return responce
}
