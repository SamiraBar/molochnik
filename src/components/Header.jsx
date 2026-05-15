import './Header.css'

export default function Header({ scrolled }) {
  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header__inner">
        <nav className="header__nav header__nav--left">
          <a href="#quality" className="header__link">О качестве</a>
          <a href="#win" lassName="header__link">Выиграй 150К сом</a>
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
        <button className="header__burger" aria-label="Меню">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
