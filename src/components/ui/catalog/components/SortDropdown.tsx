import { ProductSortTypes } from '@/types/product.interface'
import React from 'react'

export const SortDropdown = () => {
	return (
		<div>
			<select>
				{(
					Object.keys(ProductSortTypes) as Array<keyof typeof ProductSortTypes>
				).map(key => {
					return (
						<option value={ProductSortTypes[key]}>
							{ProductSortTypes[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}
