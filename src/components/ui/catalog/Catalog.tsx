import { FC } from 'react'
import { ProductItem } from './productItem/ProductItem'
import { Products } from '@/types/product.interface'
import { Heading } from '../Heading'

interface Props extends Products {
	title?: string
}

export const Catalog: FC<Props> = ({ products, title }) => {
	return (
		<div className='flex flex-col gap-3'>
			{title && <Heading>{title}</Heading>}
			{!!products.length ? (
				<>
					<div className='flex flex-wrap gap-10'>
						{products.map(product => (
							<ProductItem product={product} key={product.id} />
						))}
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</div>
	)
}
