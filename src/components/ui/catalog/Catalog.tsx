import { FC } from 'react'
import { ProductItem } from './productItem/ProductItem'
import { Spin } from 'antd'
import { Products } from '@/types/product.interface'
import { Heading } from '../Heading'
import { SortDropdown } from './components/SortDropdown'
import { Button } from '../Button'

interface Props extends Products {
	isLoading?: boolean
	title?: string
	isPagination?: boolean
}

const Catalog: FC<Props> = ({ products, isLoading, title, isPagination }) => {
	return (
		<div className='flex flex-col gap-3'>
			{title && <Heading>{title}</Heading>}
			{isPagination && <SortDropdown />}
			{isLoading ? (
				<Spin />
			) : !!products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10'>
						{products.map(product => (
							<ProductItem product={product} key={product.id} />
						))}
					</div>
					{isPagination && <Button variant='orange'>Load more</Button>}
				</>
			) : (
				<div>There are no products</div>
			)}
		</div>
	)
}

export default Catalog
