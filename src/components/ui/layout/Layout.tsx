import { FC, PropsWithChildren } from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/header/Header'

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<Header />
			<div className='flex'>
				<Sidebar />
				<main className='p-12 w-full'>{children}</main>
			</div>
		</div>
	)
}
