import { axiosAuth } from '@/api/api.interceptor'
import { Category } from '@/types/category.interface'

export const getCategoryById = async (id: number) => {
	const responce = await axiosAuth<Category>({
		url: `/category/${id}`,
		method: 'GET'
	})

	return responce
}
