import { axiosAuth } from '@/api/api.interceptor'
import { Category } from '@/types/category.interface'

export const getAllCategories = async () => {
	const responce = await axiosAuth<Category[]>({
		url: `/category`,
		method: 'GET'
	})

	return responce
}
