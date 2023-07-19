import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
	CartInitialState,
	ChangeQuantityPayload,
	QuantityChangeType
} from './cart.types'
import { CartItem } from '@/types/cart.interface'

const initialState: CartInitialState = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }: PayloadAction<CartItem>) => {
			const isExist = state.items.some(
				item => item.product.id === payload.product.id
			)

			if (!isExist) {
				state.items.push({ ...payload })
			}
		},
		removeFromCart: (state, { payload }: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(item => item.id !== payload.id)
		},
		changeQuantity: (
			state,
			{ payload: { id, type } }: PayloadAction<ChangeQuantityPayload>
		) => {
			const item = state.items.find(item => item.id === id)
			if (item) {
				if (type === QuantityChangeType.plus) {
					item.quantity++
				} else {
					if (item.quantity > 0) item.quantity--
				}
			}
		},
		reset: state => {
			state.items = []
		}
	}
})
