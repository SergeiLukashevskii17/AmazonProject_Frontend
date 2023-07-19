import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { QuantityChangeType } from '@/store/cart/cart.types'
import { CartItem } from '@/types/cart.interface'
import { FC } from 'react'
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi'

export const CartActions: FC<{ item: CartItem }> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useActions()

	const { items } = useCart()
	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity

	const increaseQuantity = () =>
		changeQuantity({ id: item.id, type: QuantityChangeType.minus })

	const reduceQuantity = () =>
		changeQuantity({ id: item.id, type: QuantityChangeType.plus })

	const remove = () => removeFromCart({ id: item.id })

	return (
		<div className='mt-3'>
			<div className='flex items-center gap-3'>
				<button onClick={increaseQuantity}>
					<FiMinus fontSize={13} />
				</button>

				<input
					disabled
					readOnly
					value={quantity}
					className='w-10 bg-black text-center'
				/>

				<button onClick={reduceQuantity}>
					<FiPlus fontSize={13} />
				</button>

				<button onClick={remove}>
					<FiTrash />
				</button>
			</div>
		</div>
	)
}
