import { axiosAuth } from '@/api/api.interceptor'
import { Category, UpdateCategoryType } from '@/types/category.interface'

export const updateCategory = async (data: UpdateCategoryType) => {
	const responce = await axiosAuth<Category>({
		url: `/category`,
		method: 'PUT',
		data
	})

	return responce
}
