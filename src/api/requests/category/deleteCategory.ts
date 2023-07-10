import { axiosAuth } from '@/api/api.interceptor'
import { Category, DeleteCategoryType } from '@/types/category.interface'

export const deleteCategory = async (data: DeleteCategoryType) => {
	const responce = await axiosAuth<Category>({
		url: `/category`,
		method: 'DELETE',
		data
	})

	return responce
}
