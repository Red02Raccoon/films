import React, { FC } from 'react'

import { usePopularGenres } from './usePopularGenres'

import { Menu } from '../Menu'

export const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">Loading...</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}
