import { axiosAuth } from '@/api/api.interceptor'
import { CreateProductType, Product } from '@/types/product.interface'

export const createCategory = async (data: CreateProductType) => {
	const responce = await axiosAuth<Product>({
		url: `/product`,
		method: 'POST',
		data
	})

	return responce
}
