import { Meta } from '@/ui/Meta'
import { Catalog } from '@/ui/catalog/Catalog'
import Layout from 'antd/es/layout/layout'
import { NextPageAuth } from '@/providers/types'
import { useGetProfile } from '@/hooks/query/user/useGetProfile'

const FavoritesPage: NextPageAuth = () => {
	const { userProfile, isUserProfileLoading } = useGetProfile()

	return (
		<Meta title='Favorites'>
			<Layout>
				<Catalog products={userProfile?.favorites || []} title='Favorites' />
			</Layout>
		</Meta>
	)
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage
