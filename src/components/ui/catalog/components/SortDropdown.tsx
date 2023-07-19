import { ProductSortTypes } from '@/types/product.interface'
import { Dispatch, FC, SetStateAction } from 'react'

interface Props {
	sortType: ProductSortTypes
	setSortType: Dispatch<SetStateAction<ProductSortTypes>>
}

export const SortDropdown: FC<Props> = ({ setSortType, sortType }) => {
	return (
		<div className='flex justify-end'>
			<select
				className='py-1 px-2 text-lg bg-white outline-none cursor-pointer'
				value={sortType}
				onChange={e => setSortType(e.target.value as any)}
			>
				{(
					Object.keys(ProductSortTypes) as Array<keyof typeof ProductSortTypes>
				).map(key => {
					return (
						<option value={ProductSortTypes[key]} key={key}>
							{ProductSortTypes[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}
