import { CartItem as CartItemType } from '@/types/cart.interface'
import { FC } from 'react'
import Image from 'next/image'
import { convertPrice } from '@/utils/convertPrice'
import { CartActions } from './CartActions'

export const CartItem: FC<{ item: CartItemType }> = ({ item }) => {
	return (
		<div>
			<Image
				src={item.product.images[0]}
				width={100}
				height={100}
				alt={item.product.name}
			/>
			<div>
				<div>{item.product.name}</div>
				<div>{convertPrice(item.price)}</div>
				<CartActions item={item} />
			</div>
		</div>
	)
}
