import { CategoryService } from '@/services/category/category.service'
import { ProductService } from '@/services/product/product.service'
import { Category } from '@/types/category.interface'
import { Product } from '@/types/product.interface'
import { Meta } from '@/ui/Meta'
import { Catalog } from '@/ui/catalog/Catalog'
import { Layout } from 'antd'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await CategoryService.getAll()

	const paths = data.map(({ slug }) => ({
		params: { slug }
	}))

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug as string

	const categoryData = await CategoryService.getBySlug(slug)
	const category = categoryData?.data || []
	const categoryId = category.id

	const productData = await ProductService.getByCategory(categoryId)
	const products = productData?.data || []

	return {
		props: {
			category,
			products
		}
	}
}

const CategoryPage: NextPage<{ products: Product[]; category: Category }> = ({
	category,
	products
}) => {
	return (
		<Meta title={category.name}>
			<Layout>
				<Catalog products={products || []} title={category.name} />
			</Layout>
		</Meta>
	)
}

export default CategoryPage
