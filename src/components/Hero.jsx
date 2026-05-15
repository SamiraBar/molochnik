import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Узор сверху */}
      <div className="hero__uzor" aria-hidden="true">
        <img src="/images/uzor.png" alt="" />
      </div>

      {/* Горы / поле снизу */}
      <div className="hero__landscape" aria-hidden="true">
        <img src="/images/lamipak.png" alt="" />
      </div>

      {/* Печать 20 лет */}
      <div className="hero__stamp" aria-hidden="true">
        <img src="/images/20y.png" alt="20 лет в Кыргызстане" />
      </div>

      {/* Контент */}
      <div className="hero__content">
        <div className="hero__character">
          <img src="/images/people.png" alt="Весёлый молочник" />
        </div>

        <div className="hero__text">
          <h1 className="hero__title">
            Невидимая забота<br />
            каждый день
          </h1>
          <p className="hero__desc">
            Я – Весёлый молочник! И я каждый день забочусь, чтобы на вашем
            столе были только качественные молочные продукты из свежего молока.
          </p>
        </div>
      </div>

      {/* Кнопка-галочка с круговым текстом */}
      <button className="hero__galka" aria-label="Больше о качестве Весёлого молочника">
        <img src="/images/galka.png" alt="" />
      </button>

      {/* Точки слайдера */}
      <div className="hero__dots" aria-hidden="true">
        <span className="hero__dot hero__dot--active"></span>
        <span className="hero__dot"></span>
        <span className="hero__dot"></span>
      </div>
    </section>
  )
}
