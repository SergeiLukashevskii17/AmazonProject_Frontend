import { axiosAuth } from '@/api/api.interceptor'
import { Product, ProductDataFilters } from '@/types/product.interface'

export const getAllProducts = async (query?: ProductDataFilters) => {
	const responce = await axiosAuth<Product[]>({
		url: `/product`,
		method: 'GET',
		params: query || {}
	})

	return responce
}
