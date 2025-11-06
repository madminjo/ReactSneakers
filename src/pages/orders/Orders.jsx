import { Link } from 'react-router-dom'
import OrderCart from '../../components/orderes/OrderCart' // твой существующий компонент
import { asset } from '../../lib/asset'

const Orders = ({
	orderes = [],
	onAddToFavorite,
	onAddToCart,
	onRemoveFavorites,
}) => {
	return (
		<div className='content px-3 sm:px-6 py-6'>
			{orderes.length ? (
				<div className='flex px-0 py-3 gap-3 items-center'>
					<Link to='/'>
						<img className='mb-0' src={asset('hellls.svg')} alt='' />
					</Link>
					<h1 className='text-2xl sm:text-3xl font-bold'>Мои покупки</h1>
				</div>
			) : null}

			<div className='min-h-[200px]'>
				{orderes.length === 0 ? (
					<div>
						<div className='flex flex-col items-center gap-3'>
							<img width={70} height={70} src={asset('imageHelp.svg')} alt='' />
							<h2 className='text-2xl font-bold'>У вас нет заказов</h2>
							<p className='text-gray-600 text-sm'>
								Вы нищеброд? Оформите хотя бы один заказ.
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
						{orderes.map(it => (
							<OrderCart
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

export default Orders
