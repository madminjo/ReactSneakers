import { useState } from 'react'
import './Cards.scss'
import ContentLoader from 'react-content-loader'
import { asset } from '../../lib/asset'

const Cards = ({
	onClickFavorit,
	onClickPluss,
	titel,
	price,
	image,
	id,
	loading = false,
}) => {
	const [isAdded, setIsAdded] = useState(false)
	const [isAddheart, setIsAddheart] = useState(false)

	const onClickPlus = () => {
		setIsAdded(!isAdded)
		onClickPluss?.({ titel, price, image, id })
	}

	const onClickHeart = () => {
		setIsAddheart(!isAddheart)
		onClickFavorit?.({ titel, price, image, id })
	}

	return (
		<div className='card'>
			{loading ? (
				<ContentLoader
					speed={2}
					width={160}
					height={250}
					viewBox='0 0 160 250'
					backgroundColor='#f3f3f3'
					foregroundColor='#ecebeb'
					style={{
						display: 'block',
						margin: '0 auto',
					}}
				>
					<rect x='0' y='0' rx='10' ry='10' width='160' height='150' />
					<rect x='10' y='165' rx='3' ry='3' width='140' height='15' />
					<rect x='10' y='185' rx='3' ry='3' width='120' height='15' />
					<rect x='10' y='215' rx='8' ry='8' width='80' height='24' />
					<rect x='118' y='210' rx='8' ry='8' width='32' height='32' />
				</ContentLoader>
			) : (
				<>
					<div className='favorite' onClick={onClickHeart}>
						<img
							src={asset(isAddheart ? 'heart-color.svg' : 'heart-gray.svg')}
							alt=''
						/>
					</div>
					<img width={133} height={112} src={asset(image)} alt='' />
					<h5>{titel}</h5>
					<div className='flex justify-between items-center'>
						<div className='flex flex-col'>
							<span>Цена:</span>
							<b>{price} руб.</b>
						</div>
						<img
							onClick={onClickPlus}
							width={32}
							src={asset(isAdded ? 'btn-chekit.svg' : 'btn-nochekit.svg')}
							alt=''
						/>
					</div>
				</>
			)}
		</div>
	)
}

export default Cards
