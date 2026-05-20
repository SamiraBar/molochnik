import './Facts.css'
import { useLang } from '../context/LanguageContext'

export default function Facts() {
  const { t } = useLang()
  const f = t.facts

  return (
    <section className="facts">
      <div className="facts__container">
        <div className="facts__character">
          <img src="/images/person-facts.png" alt="Весёлый молочник" />
        </div>

        <div className="facts__card">
          <h2 className="facts__title">{f.title}</h2>
          <p className="facts__text">{f.text}</p>
          <button className="facts__btn">{f.btn}</button>
        </div>
      </div>
    </section>
  )
}
