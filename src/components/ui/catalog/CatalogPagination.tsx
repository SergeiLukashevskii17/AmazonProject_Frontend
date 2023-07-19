import { FC, useEffect, useState } from 'react'
import { ProductItem } from './productItem/ProductItem'
import { PaginationProducts, ProductSortTypes } from '@/types/product.interface'
import { Heading } from '../Heading'
import { SortDropdown } from './components/SortDropdown'
import { useGetProducts } from '@/hooks/query/product/useGetProducts'
import { PaginationPageList } from './components/PaginationPageList'

interface Props extends PaginationProducts {
	isLoading?: boolean
	title?: string
}

const perPage = 5

export const CatalogPagination: FC<Props> = ({ products, title, total }) => {
	const [actualProducts, setActualProducts] = useState(products)
	const [page, setPage] = useState(1)

	const [sortType, setSortType] = useState<ProductSortTypes>(
		ProductSortTypes.newest
	)

	const { products: sortedProducts, isProductsLoading } = useGetProducts({
		page,
		perPage,
		sort: sortType
	})

	useEffect(() => {
		if (sortedProducts?.products.length)
			setActualProducts(sortedProducts.products)
	}, [sortedProducts])

	return (
		<div className='flex flex-col gap-3'>
			{title && <Heading>{title}</Heading>}
			{!!actualProducts.length ? (
				<>
					<SortDropdown sortType={sortType} setSortType={setSortType} />
					<div className='flex flex-wrap gap-10'>
						{actualProducts.map(product => (
							<ProductItem product={product} key={product.id} />
						))}
					</div>
					<PaginationPageList
						page={page}
						perPage={perPage}
						setPage={setPage}
						total={total}
					/>
				</>
			) : (
				<div>There are no products</div>
			)}
		</div>
	)
}
