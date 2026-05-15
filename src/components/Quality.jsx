import './Quality.css'

const cards = [
  'Собственная ферма и натуральное свежее молоко каждый день',
  'Строгий многоступенчатый контроль качества на каждом этапе',
  'Натуральные составы без консервантов и искусственных добавок',
]

export default function Quality() {
  return (
    <section className="quality" id="quality">
      <div className="quality__cows">
        <img src="/images/quality-cows.png" alt="" aria-hidden="true" />
      </div>

      <div className="quality__body">
        <h2 className="quality__title">Забота о качестве</h2>
        <div className="quality__cards">
          {cards.map((text, i) => (
            <div key={i} className="quality__card">
              <img src="/images/galka.png" className="quality__icon" alt="" aria-hidden="true" />
              <p className="quality__card-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
