import Cards from '../../components/cards/Cards'
import { asset } from '../../lib/asset'

const HomePage = ({
	items = [],
	searchValue,
	setSearchValue,
	onchangeSearchInput,
	onAddToFavorite,
	onAddToCart,
	isLoading,
}) => {
	const renderItems = () => {
		const filteredItems = items.filter(it =>
			(it.title ?? it.titel ?? '')
				.toLowerCase()
				.includes(searchValue.toLowerCase())
		)

		if (isLoading)
			return [...Array(10)].map((_, index) => <Cards key={index} loading />)

		return filteredItems.map(it => (
			<Cards
				key={it.id}
				id={it.id}
				titel={it.titel ?? it.title}
				price={it.price}
				image={it.image}
				onClickFavorit={() => onAddToFavorite(it)}
				onClickPluss={() => onAddToCart(it)}
			/>
		))
	}

	return (
		<div className='content px-3 sm:px-6 py-6'>
			<div className='flex items-center justify-between gap-3 py-3 flex-wrap'>
				<h1 className='text-2xl sm:text-3xl font-bold'>
					{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
				</h1>
				<div className='search-block flex items-center cursor-pointer w-full sm:w-auto'>
					<img src={asset('search.svg')} alt='Search' />
					{searchValue && (
						<img
							onClick={() => setSearchValue('')}
							className='clear'
							src={asset('x.svg')}
							alt='clear'
						/>
					)}
					<input
						onChange={onchangeSearchInput}
						value={searchValue}
						type='text'
						placeholder='Поиск...'
						className='w-full sm:w-[200px]'
					/>
				</div>
			</div>

			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5'>
				{renderItems()}
			</div>
		</div>
	)
}

export default HomePage
