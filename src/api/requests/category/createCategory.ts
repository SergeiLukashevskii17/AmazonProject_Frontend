import { axiosAuth } from '@/api/api.interceptor'
import { Category, CreateCategoryType } from '@/types/category.interface'

export const createCategory = async (data: CreateCategoryType) => {
	const responce = await axiosAuth<Category>({
		url: `/category`,
		method: 'POST',
		data
	})

	return responce
}
