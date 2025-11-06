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

		if (isLoading) {
			return [...Array(10)].map((_, index) => (
				<Cards key={index} loading={true} />
			))
		}

		return filteredItems.map(it => (
			<Cards
				key={it.id}
				id={it.id}
				titel={it.titel ?? it.title}
				price={it.price}
				image={it.image}
				onClickFavorit={() => onAddToFavorite(it)}
				onClickPluss={() => onAddToCart(it)}
				loading={false}
			/>
		))
	}

	return (
		<div className='content p-8'>
			<div className='flex items-center justify-between px-0 py-5'>
				<h1 className='mb-4 text-3xl font-bold'>
					{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
				</h1>

				<div className='search-block flex items-center cursor-pointer'>
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
					/>
				</div>
			</div>

			<div className='sneakers'>{renderItems()}</div>
		</div>
	)
}

export default HomePage
