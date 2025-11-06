import React from 'react'
import FavoriteCard from '../../components/favorites/FavotitCart'
import { Link } from 'react-router-dom'
import AppContext from '../../context'

const FavoritePage = ({ onAddToFavorite, onAddToCart, onRemoveFavorites }) => {
	const { favorites } = React.useContext(AppContext)

	return (
		<div className='content p-8'>
			{favorites.length ? (
				<div className='flex px-0 py-5 gap-3 items-center'>
					<Link to='/'>
						<img className='mb-4' src='/hellls.svg' alt='' />
					</Link>
					<h1 className='mb-4 text-3xl font-bold'>Мои закладки</h1>
				</div>
			) : (
				''
			)}

			<div className='sneakers flex flex-wrap gap-5'>
				{favorites.length === 0 ? (
					<div>
						<div className='flex flex-col items-center gap-3'>
							<img width={70} height={70} src='/imagenul.svg' alt='' />
							<h2 className='text-2xl font-bold'>Закладок нет :(</h2>
							<p className='text-gray-600 text-sm'>
								Вы ничего не добавляли в закладки
							</p>
						</div>
						<Link to='/'>
							<button className='greenButton gap-5 flex items-center justify-center mt-8'>
								<img src='/leftBtn.svg' alt='' /> Вернуться назад
							</button>
						</Link>
					</div>
				) : (
					favorites.map(it => (
						<FavoriteCard
							key={it.id}
							id={it.id}
							title={it.title ?? it.titel}
							price={it.price}
							image={it.image}
							onToggleFavorite={() => onAddToFavorite(it)}
							onAddToCart={() => onAddToCart(it)}
							onRemoveFavorites={() => onRemoveFavorites(it.id)}
						/>
					))
				)}
			</div>
		</div>
	)
}

export default FavoritePage
