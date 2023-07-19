import { useGetProducts } from '@/hooks/query/product/useGetProducts'
import { Meta } from '@/ui/Meta'
import { Catalog } from '@/ui/catalog/Catalog'
import { Layout } from 'antd'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const SearchResultPage: NextPage = () => {
	const { query } = useRouter()
	const { products, isProductsLoading } = useGetProducts({
		searchTerm: query.term as string
	})

	return (
		<Meta title='Search'>
			<Layout>
				<Catalog
					products={products?.products || []}
					title={query.term as string}
				/>
			</Layout>
		</Meta>
	)
}

export default SearchResultPage
