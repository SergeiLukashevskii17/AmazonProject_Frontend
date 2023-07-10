import { axiosAuth } from '@/api/api.interceptor'

type ProductRatingResponce = { rating: number }

export const getProductAvgRating = async (id: number) => {
	const responce = await axiosAuth<ProductRatingResponce>({
		url: `/review/avg/${id}`,
		method: 'GET'
	})

	return responce
}
