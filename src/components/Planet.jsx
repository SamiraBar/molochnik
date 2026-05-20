import './Planet.css'
import { useLang } from '../context/LanguageContext'

const cardIcons = ['/images/strelki.png', '/images/car.png']

export default function Planet() {
  const { t } = useLang()
  const p = t.planet

  return (
    <section className="planet" id="ecology">
      <h2 className="planet__title zametka-bold">
        {p.title.split('\n').map((line, i) => (
          <span key={i}>{i > 0 && <br />}{line}</span>
        ))}
      </h2>

      <div className="planet__cards">
        <article className="planet-card planet-card--package">
          <img src="/images/Vector.png" alt="" className="planet-card__pattern" />
          <img src="/images/uzorTop.png" alt="" className="planet-card__pattern2" />
          <div className="planet-card__head">
            <div className="planet-card__icon">
              <img src={cardIcons[0]} alt="" />
            </div>
            <h3 className="planet-card__title">
              {p.cards[0].title.split('\n').map((line, i) => (
                <span key={i}>{i > 0 && <br />}{line}</span>
              ))}
            </h3>
          </div>
          {p.cards[0].texts.map((txt, i) => (
            <p key={i} className="planet-card__text">{txt}</p>
          ))}
        </article>

        <article className="planet-card planet-card--car">
          <img src="/images/Vector.png" alt="" className="planet-card__pattern" />
          <img src="/images/uzorTop.png" alt="" className="planet-card__pattern2" />
          <div className="planet-card__head">
            <div className="planet-card__icon">
              <img src={cardIcons[1]} alt="" />
            </div>
            <h3 className="planet-card__title">
              {p.cards[1].title}
            </h3>
          </div>
          {p.cards[1].texts.map((txt, i) => (
            <p key={i} className="planet-card__text">{txt}</p>
          ))}
        </article>
      </div>
    </section>
  )
}
