import { axiosAuth } from '@/api/api.interceptor'
import { Product, UpdateProductType } from '@/types/product.interface'

export const updateProduct = async (data: UpdateProductType) => {
	const responce = await axiosAuth<Product>({
		url: `/product`,
		method: 'PUT',
		data
	})

	return responce
}
