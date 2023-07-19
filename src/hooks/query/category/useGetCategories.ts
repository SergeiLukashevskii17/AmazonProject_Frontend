import { CategoryService } from '@/services/category/category.service'
import { useQuery } from '@tanstack/react-query'

export const useGetCategories = () => {
	const { data: categories, isLoading: isCategoriesLoading } = useQuery(
		['getCategories'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	return {
		categories,
		isCategoriesLoading
	}
}
