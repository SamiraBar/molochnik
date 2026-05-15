import './Facts.css'

export default function Facts() {
  return (
    <section className="facts">
      <div className="facts__container">
        <div className="facts__character">
          <img src="/images/person-facts.png" alt="Весёлый молочник" />
        </div>

        <div className="facts__card">
          <h2 className="facts__title">Молочные факты</h2>
          <p className="facts__text">
            Стакан молока содержит 30% суточной нормы кальция,
            необходимого для здоровья костей и зубов.
          </p>
          <button className="facts__btn">Хочу помнить</button>
        </div>
      </div>
    </section>
  )
}
