import { FC } from 'react'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { Product } from '@/types/product.interface'
import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri'

export const AddToCartButton: FC<{ product: Product }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<div>
			<button
				className='text-secondary w-8 h-8 flex justify-center items-center'
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({
								product,
								quantity: 1,
								price: product.price
						  })
				}
			>
				{currentElement ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
			</button>
		</div>
	)
}
