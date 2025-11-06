import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import AppContext from '../../context'
import { asset } from '../../lib/asset'

const Header = props => {
const { numbers } = React.useContext(AppContext)



	return (
		<header className='flex justify-between items-center p-8'>
			<div className='headerLeft flex items-center'>
				<Link to='/' className='flex items-center'>
					<img width={40} height={40} src={asset('logo.svg')} alt='' />
					<div>
						<h2 className='m-0 uppercase'>REACT SNEAKERS</h2>
						<p className='m-0'>Магазин лучших кроссовок</p>
					</div>
				</Link>
			</div>

			<ul className='headerRight flex'>
				<li
					onClick={props.onClickCart}
					className='mr-8 flex items-center cursor-pointer'
				>
					<img width={18} height={18} src={asset('basket.svg')} alt='' />
					<span>{numbers} руб.</span>
				</li>

				<li className='mr-8 flex items-center cursor-pointer'>
					<Link to='/favorites' className='flex'>
						<img width={18} height={18} src={asset('heart.svg')} alt='' />
						<span>Закладки</span>
					</Link>
				</li>

				<li className='mr-8 flex items-center cursor-pointer'>
					<Link to='/orders' className='flex'>
						<img width={18} height={18} src={asset('user.svg')} alt='' />
						<span>Профиль</span>
					</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
