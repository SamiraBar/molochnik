import { useState, useEffect } from 'react'
import './Header.css'

const NAV_LINKS = [
  { href: '#quality', label: 'О качестве' },
  { href: '#win', label: 'Выиграй 150К сом' },
  { href: '#products', label: 'Продукция' },
  { href: '#ecology', label: 'Об экологии' },
]

export default function Header({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Блокируем скролл body, когда открыто мобильное меню
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
      <>
        <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
          <div className="header__inner">
            <nav className="header__nav header__nav--left">
              <a href="#quality" className="header__link">О качестве</a>
              <a href="#win" className="header__link">Выиграй 150К сом</a>
            </nav>

            <a href="#" className="header__logo" aria-label="Весёлый молочник">
              <img
                  src="/images/logo.png"
                  alt="Весёлый молочник"
                  className="header__logo-img header__logo-img--initial"
              />
              <img
                  src="/images/logo-scroll.png"
                  alt="Весёлый молочник"
                  className="header__logo-img header__logo-img--scrolled"
              />
            </a>

            <nav className="header__nav header__nav--right">
              <a href="#products" className="header__link">Продукция</a>
              <a href="#ecology" className="header__link">Об экологии</a>
              <button className="header__lang" aria-label="Сменить язык">KG</button>
            </nav>

            {/* Бургер для мобилки */}
            <button
                className="header__burger"
                aria-label="Открыть меню"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>

        {/* ===== Мобильное полноэкранное меню ===== */}
        <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
          <div className="mobile-menu__top">
            <a href="#" className="mobile-menu__logo" aria-label="Весёлый молочник" onClick={closeMenu}>
              <img src="/images/logo-scroll.png" alt="Весёлый молочник" />
            </a>
            <button
                className="mobile-menu__close"
                aria-label="Закрыть меню"
                onClick={closeMenu}
            >
              <span></span>
              <span></span>
            </button>
          </div>

          <nav className="mobile-menu__nav">
            {NAV_LINKS.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="mobile-menu__link"
                    onClick={closeMenu}
                >
                  {link.label}
                </a>
            ))}
          </nav>

          <button className="mobile-menu__lang" aria-label="Сменить язык">KG</button>
        </div>
      </>
  )
}
