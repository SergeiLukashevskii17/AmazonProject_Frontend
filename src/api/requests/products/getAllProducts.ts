import { axiosAuth } from '@/api/api.interceptor'
import { PaginationProducts, Product, ProductDataFilters } from '@/types/product.interface'

export const getAllProducts = async (query?: ProductDataFilters) => {
	const responce = await axiosAuth<PaginationProducts>({
		url: `/product`,
		method: 'GET',
		params: query || {}
	})

	return responce
}
