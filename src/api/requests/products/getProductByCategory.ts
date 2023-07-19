import { axiosAuth } from '@/api/api.interceptor'
import { Product } from '@/types/product.interface'

export const getProductByCategory = async (categoryId: number) => {
	const responce = await axiosAuth<Product>({
		url: `/product/category/${categoryId}`,
		method: 'GET'
	})

	return responce
}
