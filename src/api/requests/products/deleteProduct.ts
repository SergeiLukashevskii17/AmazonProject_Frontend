import { axiosAuth } from '@/api/api.interceptor'
import { DeleteProductType, Product } from '@/types/product.interface'

export const deleteProduct = async (data: DeleteProductType) => {
	const responce = await axiosAuth<Product>({
		url: `/product`,
		method: 'DELETE',
		data
	})

	return responce
}
