import React from 'react'
import './Drawer.scss'
import AppContext from '../../context'
import { asset } from '../../lib/asset'

const Drawer = ({ onClose, onRemove, items = [] }) => {
  const { numbers = 0 } = React.useContext(AppContext)

  // Сумма корзины из контекста
  const subtotal = Number(numbers) || 0
  const tax = +(subtotal * 0.05).toFixed(2)        // 5% налог
  const total = +(subtotal + tax).toFixed(2)       // итог к оплате

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-8 flex items-center justify-between">
          Корзина{' '}
          <img onClick={onClose} className="cursor-pointer" src={asset('x.svg')} alt="Remove" />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="item">
              {items.map(obj => (
                <div key={obj.id} className="cartItem flex items-center mb-5">
                  <img className="removeBtn" onClick={() => onRemove(obj.id)} src={asset('x.svg')} alt="Remove" />
                  <div className="mr-5">
                    <p>{obj.titel ?? obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    className="removeBtn"
                    onClick={() => onRemove(obj.id)}
                    src="/x.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotlalBlock">
              <ul>
                <li className="flex">
                  <span>Итог:</span>
                  <div></div>
                  <b>{subtotal} руб.</b>
                </li>
                <li className="flex">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{tax} руб.</b>
                </li>
                <li className="flex">
                  <span>К оплате:</span>
                  <div></div>
                  <b>{total} руб.</b>
                </li>
              </ul>
              <button className="greenButton flex items-center justify-center">
                Оформить заказ <img src={asset('left.svg')} alt="" />
              </button>
            </div>
          </div>
        ) : (
          <div className="carzin items-center justify-center flex flex-col gap-7">
            <div className="items-center justify-center flex flex-col gap-2">
              <img width={120} height={120} src={asset('carzin.svg')} alt="" />
              <h3 className="text-2xl font-bold">Корзина пустая</h3>
              <p className="flex items-center text-center w-[228] text-gray-600">
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>
            </div>
            <button onClick={onClose} className="greenButton flex items-center justify-center">
              <img src={asset('leftBtn.svg')} alt="" /> Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Drawer
