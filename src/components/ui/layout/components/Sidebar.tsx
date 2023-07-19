import { useGetCategories } from '@/hooks/query/category/useGetCategories'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { Spin } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'clsx'
import { FiLogOut } from 'react-icons/fi'

export const Sidebar = () => {
	const { categories, isCategoriesLoading } = useGetCategories()
	const { asPath } = useRouter()
	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<aside className='min-h-[calc(100vh-80px)] bg-secondary p-8 flex  flex-col'>
			<div>
				{isCategoriesLoading ? (
					<Spin />
				) : categories?.length ? (
					<>
						<div className='text-xl text-white mt-4 mb-6 ml-6'>Categories:</div>
						<ul>
							{categories.map(category => (
								<li key={category.id}>
									<Link
										className={cn(
											'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
											asPath === `/category/${category.slug}`
										)}
										href={`/category/${category.slug}`}
									>
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<div>Categories not found</div>
				)}
			</div>

			{!!user && (
				<button
					className='text-white flex items-center ml-10 mb-10'
					onClick={() => logout()}
				>
					<FiLogOut />
					<span className='ml-2'>Logout</span>
				</button>
			)}
		</aside>
	)
}
