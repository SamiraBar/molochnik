import './Ecology.css'

export default function Ecology() {
  return (
    <section className="ecology" id="ecology">
      <div className="ecology__container">
        <div className="ecology__text-col">
          <h2 className="ecology__title">Забота об экологии</h2>
          <p className="ecology__desc">
            Мы заботимся о природе Кыргызстана — используем экологичную упаковку
            и поддерживаем чистоту пастбищ, где пасутся наши коровы.
          </p>
        </div>
        <div className="ecology__image-col">
          <img src="/images/ecology-person.png" alt="Весёлый молочник с коровой" />
        </div>
      </div>
    </section>
  )
}
