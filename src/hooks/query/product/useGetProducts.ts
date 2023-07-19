import { ProductService } from '@/services/product/product.service'
import { ProductDataFilters } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'

export const useGetProducts = (query?: ProductDataFilters) => {
	const { data: products, isLoading: isProductsLoading } = useQuery(
		['getProducts', query?.page, query?.searchTerm, query?.sort],
		() => ProductService.getAll(query),
		{
			select: ({ data }) => data
		}
	)

	return {
		products,
		isProductsLoading
	}
}
