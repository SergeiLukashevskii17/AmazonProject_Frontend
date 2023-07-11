import { axiosAuth } from '@/api/api.interceptor'
import { Product } from '@/types/product.interface'

export const getProductBySlug = async (slug: string) => {
	const responce = await axiosAuth<Product>({
		url: `/product/${slug}`,
		method: 'GET'
	})

	return responce
}
