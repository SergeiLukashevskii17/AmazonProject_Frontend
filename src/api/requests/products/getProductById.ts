import { axiosAuth } from '@/api/api.interceptor'
import { Product } from '@/types/product.interface'

export const getProductById = async (id: number) => {
	const responce = await axiosAuth<Product>({
		url: `/product/${id}`,
		method: 'GET'
	})

	return responce
}
