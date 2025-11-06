import { useState } from 'react'
import { asset } from '../../lib/asset'
import './Cards.scss'

const FavoriteCard = ({ id, title, price, image, onToggleFavorite, onAddToCart, onRemoveFavorites }) => {
  const [isAdded, setIsAdded] = useState(false)
  const [isHeart, setIsHeart] = useState(true)

  const handleAddToCart = () => {
    setIsAdded(v => !v)
    onAddToCart?.({ id, title, price, image })
  }

  const handleToggleFavorite = () => {
    setIsHeart(prev => {
      const next = !prev
      if (!next) onRemoveFavorites?.(id)   // убираем из избранного при выключении
      return next
    })
    onToggleFavorite?.({ id, title, price, image })
  }

  return (
    <div className="card">
      <button className="favorite" onClick={handleToggleFavorite} title="Убрать из избранного">
        <img src={asset(isHeart ? 'heart-color.svg' : 'heart-gray.svg')} alt="favorite" />
      </button>

      <img width={133} height={112} src={asset(image)} alt={title} />
      <h5>{title}</h5>

      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <img
          onClick={handleAddToCart}
          width={32}
          src={asset(isAdded ? 'btn-chekit.svg' : 'btn-nochekit.svg')}
          alt={isAdded ? 'В корзине' : 'Добавить'}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  )
}

export default FavoriteCard
