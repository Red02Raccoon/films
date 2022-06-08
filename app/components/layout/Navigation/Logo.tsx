import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-10 block">
				<Image
					src={logoImage}
					width={512}
					height={94}
					alt="Cinema"
					draggable={false}
				/>
			</a>
		</Link>
	)
}

export default Logo
