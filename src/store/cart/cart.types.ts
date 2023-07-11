import { CartItem } from '@/types/cart.interface'

export interface CartInitialState {
	items: CartItem[]
}

export interface AddToCartPayload extends Omit<CartItem, 'id'> {}

export enum QuantityChangeType {
	minus = 'minus',
	plus = 'plus'
}

export interface ChangeQuantityPayload extends Pick<CartItem, 'id'> {
	type: QuantityChangeType
}

export enum CartTypeSize {
	short = 'short',
	tall = 'tall',
	grande = 'grande',
	venti = 'venti'
}

export interface ChangeSizePayload extends Pick<CartItem, 'id'> {
	size: CartTypeSize
}
