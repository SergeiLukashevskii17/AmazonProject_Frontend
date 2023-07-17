import { FC, PropsWithChildren } from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<Header />
			<div className='flex'>
				<Sidebar />
				<main className='p-12'>{children}</main>
			</div>
		</div>
	)
}
