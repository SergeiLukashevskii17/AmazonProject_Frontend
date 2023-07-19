import { FC } from 'react'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { Product } from '@/types/product.interface'
import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri'

export const AddToCartButton: FC<{ product: Product }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const isAlreadyInCart = items.some(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<div>
			<button
				className='text-secondary w-8 h-8 flex justify-center items-center'
				onClick={() =>
					isAlreadyInCart
						? removeFromCart({ id: product.id })
						: addToCart({
								product,
								quantity: 1,
								price: product.price,
								id: product.id
						  })
				}
			>
				{isAlreadyInCart ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
			</button>
		</div>
	)
}
