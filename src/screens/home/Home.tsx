import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { PaginationProducts } from '@/types/product.interface'
import { Meta } from '@/ui/Meta'
import { FC } from 'react'
import { Layout } from '@/ui/layout/Layout'
import { CatalogPagination } from '@/ui/catalog/CatalogPagination'

export const Home: FC<PaginationProducts> = ({ products, total }) => {
	const { user, isLoading: isUserLoading } = useAuth()
	const { logout } = useActions()

	return (
		<Meta title='Home'>
			<Layout>
				{/* remove */}
				{!!user && <button onClick={() => logout()}>Logout</button>}
				<CatalogPagination
					title='Popular products'
					products={products}
					total={total}
				/>
			</Layout>
		</Meta>
	)
}
