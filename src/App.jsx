import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss'
import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Drawer from './components/drawer/Drawer'
import HomePage from './pages/home/Home'
import FavoritePage from './pages/favorites/Favorites'
import OrdersPage from './pages/orders/Orders'
import AppContext from './context'

const App = () => {
	const [cartOpened, setCartOpened] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [favorites, setFavorites] = useState([])
	const [orderes, setOrderes] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [numbers, setNumbers] = useState(0)

useEffect(() => {
  async function fetchData() {
    try {
      const [cartResponse, favoritesResponse, itemsResponse, ordersResponse] =
        await Promise.all([
          axios.get('https://68e6896e21dd31f22cc61323.mockapi.io/api/v1/cart'),
          axios.get('https://68e234bd8943bf6bb3c5ec03.mockapi.io/api/v1/favorites'),
          axios.get('https://68e6896e21dd31f22cc61323.mockapi.io/api/v1/users'),
          axios.get('https://68e234bd8943bf6bb3c5ec03.mockapi.io/api/v1/orders'),
        ])

      setItems(itemsResponse.data)
      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setOrderes(ordersResponse.data)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  fetchData()
}, [])

useEffect(() => {
  const parse = (p) => parseFloat(String(p).replace(/[^\d.]/g, '')) || 0
  const total = cartItems.reduce((sum, it) => sum + parse(it.price), 0)
  setNumbers(Number(total.toFixed(2)))
}, [cartItems])



	

	const onAddToCart = (obj) => {
		const ids = cartItems.map(i => i.id)
		if (!ids.includes(obj.id)) {
			setCartItems(prev => [...prev, obj])
			axios
				.post('https://68e6896e21dd31f22cc61323.mockapi.io/api/v1/cart', obj)
				.catch(console.error)
		}
	}

	const onRemoveCart = (id) => {
		setCartItems(prev => prev.filter(i => i.id !== id))
		axios
			.delete(`https://68e6896e21dd31f22cc61323.mockapi.io/api/v1/cart/${id}`)
			.catch(console.error)
	}

	const onRemoveFavorites = (id) => {
		setFavorites(prev => prev.filter(i => i.id !== id))
		axios
			.delete(
				`https://68e234bd8943bf6bb3c5ec03.mockapi.io/api/v1/favorites/${id}`
			)
			.catch(console.error)
	}

	const onAddToFavorite = (obj) => {
		const ids = favorites.map(i => i.id)
		if (!ids.includes(obj.id)) {
			axios
				.post(
					'https://68e234bd8943bf6bb3c5ec03.mockapi.io/api/v1/favorites',
					obj
				)
				.then(() => setFavorites(prev => [...prev, obj]))
				.catch(console.error)
		}
	}

	const onAddToFavoritesA = (obj) => {
		const ids = favorites.map(i => i.id)
		if (!ids.includes(obj.id)) {
			axios
				.post(
					'https://68e234bd8943bf6bb3c5ec03.mockapi.io/api/v1/favorites',
					obj
				)
				.then(() => setFavorites(prev => [...prev, obj]))
				.catch(console.error)
		}
	}

	const onchangeSearchInput = (e) => setSearchValue(e.target.value)

	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.id) === Number(id))
	}
	return (
		<AppContext.Provider value={{ items, cartItems, favorites,isItemAdded, numbers, setNumbers }}>
			<div className='wrapper clear'>
				{cartOpened && (
					<Drawer
						items={cartItems}
						onClose={() => setCartOpened(false)}
						onRemove={onRemoveCart}
					/>
				)}

				<Header onClickCart={() => setCartOpened(true)} />

				<Routes>
					<Route
						path='/'
						element={
							<HomePage
								items={items}
								searchValue={searchValue}
								setSearchValue={setSearchValue}
								onchangeSearchInput={onchangeSearchInput}
								onAddToFavorite={onAddToFavorite}
								onAddToCart={onAddToCart}
								isLoading={isLoading}
							/>
						}
					/>
					<Route
						path='/favorites'
						element={
							<FavoritePage
								onAddToFavorite={onAddToFavoritesA}
								onAddToCart={onAddToCart}
								onRemoveFavorites={onRemoveFavorites}
							/>
						}
					/>
					<Route
						path='/orders'
						element={
							<OrdersPage
								orderes={orderes}
								onAddToFavorite={onAddToFavoritesA}
								onAddToCart={onAddToCart}
								onRemoveFavorites={onRemoveFavorites}
							/>
						}
					/>
				</Routes>
			</div>
		</AppContext.Provider>
	)
}

export default App
