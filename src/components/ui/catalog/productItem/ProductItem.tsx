import { Product } from '@/types/product.interface'
import { FC } from 'react'
import Image from 'next/image'
import { FavoriteButton } from './components/FavoriteButton'
import { AddToCartButton } from './components/AddToCartButton'
import { ProductRating } from './components/ProductRating'
import Link from 'next/link'
import { convertPrice } from '@/utils/convertPrice'

export const ProductItem: FC<{ product: Product }> = ({ product }) => {
	return (
		<div className='animate-scaleIn'>
			<div className=' rounded-xl relative overflow-hidden bg-white'>
				<div className='absolute top-2 right-2 z-10 bg-gray rounded-md'>
					<FavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>
				<Link href={`products/${product.slug}`}>
					<Image
						width={240}
						height={240}
						style={{
							minHeight: 240,
							minWidth: 240,
							objectFit: 'cover'
						}}
						src={product.images[0]}
						alt={product.name}
					/>
				</Link>
			</div>
			<Link href={`products/${product.slug}`}>
				<h3 className='mt-2 font-semibold'>{product.name}</h3>
			</Link>
			<Link
				href={`/category/${product.category.slug}`}
				className='text-aqua test-sm mb-2'
			>
				{product.category?.name}
			</Link>
			<ProductRating reviews={product.reviews} />
			<div className='text-2xl font-semibold'>
				{convertPrice(product.price)}
			</div>
		</div>
	)
}
