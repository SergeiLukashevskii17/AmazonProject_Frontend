import { FC, PropsWithChildren } from 'react'
import cn from 'clsx'

interface Props {
	classname?: string
}

export const Heading: FC<PropsWithChildren<Props>> = ({
	children,
	classname
}) => {
	return <h1 className={cn('font-semibold text-3xl', classname)}>{children}</h1>
}
