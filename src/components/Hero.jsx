import './Hero.css'
import { useLang } from '../context/LanguageContext.jsx'

export default function Hero() {
  const { lang, t } = useLang()
  return (
      <section className="hero" id="hero">
        {/* Узор работает чисто через CSS background */}
        <div className="hero__uzor" aria-hidden="true"></div>

        {/* Горы / поле снизу */}
        <div className="hero__landscape" aria-hidden="true">
          <img src="/images/lamipak.png" alt="" />
        </div>

        {/* Контейнер с max-width: 1440px */}
        <div className="hero__inner">

          {/* Печать 20 лет */}
          <div className="hero__stamp" aria-hidden="true">
            <img src="/images/20y.png" alt="20 лет в Кыргызстане" />
          </div>

          {/* Дедушка */}
          <div className="hero__character">
            <img src="/images/people.png" alt="Весёлый молочник" />
          </div>

          {/* Текстовый блок */}
          <div className="hero__text">
            <h1 className={`hero__title${lang === 'kg' ? ' hero__title--kg' : ''}`}>
              {t.hero.title.map((line, i) => (
                <span key={i}>{i > 0 && <br />}{line}</span>
              ))}
            </h1>
            <p className="hero__desc">
              {t.hero.desc}
            </p>

            {/* ГАЛКА ТЕПЕРЬ ТУТ — она автоматически встанет под текстом */}
            <button className="hero__galka" aria-label="Больше о качестве Весёлого молочника">
              <img src="/images/galka.png" alt="" />
            </button>
          </div>

          {/* Точки слайдера */}
          <div className="hero__dots" aria-hidden="true">
            <span className="hero__dot hero__dot--active"></span>
            <span className="hero__dot"></span>
            <span className="hero__dot"></span>
          </div>

        </div>
      </section>
  )
}