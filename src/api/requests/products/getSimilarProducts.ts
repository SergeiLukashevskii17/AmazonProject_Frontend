import { axiosAuth } from '@/api/api.interceptor'
import { Product } from '@/types/product.interface'

export const getSimilarProducts = async (id: number) => {
	const responce = await axiosAuth<Product[]>({
		url: `/product/similar/${id}`,
		method: 'GET'
	})

	return responce
}
