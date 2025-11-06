import React from 'react'
import FavoriteCard from '../../components/favorites/FavotitCart'
import { Link } from 'react-router-dom'
import AppContext from '../../context'
import { asset } from '../../lib/asset'

const FavoritePage = ({ onAddToFavorite, onAddToCart, onRemoveFavorites }) => {
	const { favorites } = React.useContext(AppContext)

	return (
		<div className='content px-3 sm:px-6 py-6'>
			{favorites.length ? (
				<div className='flex px-0 py-3 gap-3 items-center'>
					<Link to='/'>
						<img className='mb-0' src={asset('hellls.svg')} alt='' />
					</Link>
					<h1 className='text-2xl sm:text-3xl font-bold'>Мои закладки</h1>
				</div>
			) : null}

			<div className='min-h-[200px]'>
				{favorites.length === 0 ? (
					<div>
						<div className='flex flex-col items-center gap-3'>
							<img width={70} height={70} src={asset('imagenul.svg')} alt='' />
							<h2 className='text-2xl font-bold'>Закладок нет :(</h2>
							<p className='text-gray-600 text-sm'>
								Вы ничего не добавляли в закладки
							</p>
						</div>
						<Link to='/'>
							<button className='greenButton gap-3 flex items-center justify-center mt-8'>
								<img src={asset('leftBtn.svg')} alt='' /> Вернуться назад
							</button>
						</Link>
					</div>
				) : (
					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5'>
						{favorites.map(it => (
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
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default FavoritePage
