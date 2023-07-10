import { axiosAuth } from '@/api/api.interceptor'
import { Category } from '@/types/category.interface'

export const getCategoryBySlug = async (slug: string) => {
	const responce = await axiosAuth<Category>({
		url: `/category/slug/${slug}`,
		method: 'GET'
	})

	return responce
}
