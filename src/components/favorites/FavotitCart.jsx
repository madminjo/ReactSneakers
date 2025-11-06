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
const next = !isHeart
setIsHeart(next)
if (!next) onRemoveFavorites?.(id)
onToggleFavorite?.({ id, title, price, image })
}


return (
<div className="card w-full">
<button type="button" className="favorite" onClick={handleToggleFavorite} aria-label="Избранное">
<img src={asset(isHeart ? 'heart-color.svg' : 'heart-gray.svg')} width={28} height={28} alt="" />
</button>


<img className="mx-auto" width={133} height={112} src={asset(image)} alt={title} />
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