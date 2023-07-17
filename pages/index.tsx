import { PaginationProducts } from '@/types/product.interface'
import { Home } from '../src/screens/home/Home'
import { GetStaticProps, NextPage } from 'next'
import { ProductService } from '@/services/product/product.service'

export const getStaticProps: GetStaticProps<PaginationProducts> = async () => {
	const { data } = await ProductService.getAll({
		page: 1,
		perPage: 5
	})

	return {
		props: data
	}
}

const HomePage: NextPage<PaginationProducts> = ({ products, length }) => {
	return <Home products={products} length={length} />
}

export default HomePage
