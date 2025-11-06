import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppContext from '../../context'
import { asset } from '../../lib/asset'

const Header = (props) => {
  const { numbers } = React.useContext(AppContext)
  const [open, setOpen] = React.useState(false)
  const { pathname } = useLocation()

  React.useEffect(() => setOpen(false), [pathname])

  return (
    <header className="border-b border-[#eaeaea]">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img width={40} height={40} src={asset('logo.svg')} alt="Logo" />
          <div className="leading-5 hidden sm:block">
            <h2 className="m-0 uppercase text-sm sm:text-base">REACT SNEAKERS</h2>
            <p className="m-0 text-xs text-gray-500">Магазин лучших кроссовок</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center">
          <li onClick={props.onClickCart} className="mr-8 flex items-center cursor-pointer gap-2">
            <img width={18} height={18} src={asset('basket.svg')} alt="Cart" />
            <span className="whitespace-nowrap">{numbers} руб.</span>
          </li>
          <li className="mr-8 flex items-center cursor-pointer">
            <Link to="/favorites" className="flex items-center gap-2">
              <img width={18} height={18} src={asset('heart.svg')} alt="Fav" />
              <span>Закладки</span>
            </Link>
          </li>
          <li className="flex items-center cursor-pointer">
            <Link to="/orders" className="flex items-center gap-2">
              <img width={18} height={18} src={asset('user.svg')} alt="User" />
              <span>Профиль</span>
            </Link>
          </li>
        </ul>

        {/* Burger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200"
          onClick={() => setOpen(v => !v)}
          aria-label="Открыть меню"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="mx-auto max-w-[1080px] px-4 sm:px-6 py-3">
            <ul className="flex flex-col gap-3">
              <li>
                <button
                  onClick={props.onClickCart}
                  className="w-full flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3"
                >
                  <span className="flex items-center gap-2">
                    <img width={18} height={18} src={asset('basket.svg')} alt="Cart" />
                    Корзина
                  </span>
                  <span className="font-semibold">{numbers} руб.</span>
                </button>
              </li>
              <li>
                <Link to="/favorites" className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3">
                  <img width={18} height={18} src={asset('heart.svg')} alt="" />
                  Закладки
                </Link>
              </li>
              <li>
                <Link to="/orders" className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3">
                  <img width={18} height={18} src={asset('user.svg')} alt="" />
                  Профиль
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header