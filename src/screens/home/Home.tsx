import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { PaginationProducts } from '@/types/product.interface'
import { Meta } from '@/ui/Meta'
import Catalog from '@/ui/catalog/Catalog'
import { FC } from 'react'
import { Layout } from '@/ui/layout/Layout'

export const Home: FC<PaginationProducts> = ({ products }) => {
	const { user, isLoading: isUserLoading } = useAuth()
	const { logout } = useActions()

	return (
		<Meta title='Home'>
			<Layout>
				{/* remove */}
				{!!user && <button onClick={() => logout()}>Logout</button>}
				<Catalog title='Popular products' products={products} isPagination />
			</Layout>
		</Meta>
	)
}
