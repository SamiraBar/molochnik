import './Intro.css'

export default function Intro() {
  return (
    <section className="intro" id="quality">
      <div className="intro__inner">
        <h2 className="intro__title">
          Молочные продукты,<br />
          в которых я уверен
        </h2>
        <p className="intro__sub">
          Каждая капля проходит путь от свежего молока<br />
          до бережно упакованной заботы для вашей семьи
        </p>

        <div className="intro__dots" aria-hidden="true">
          <img src="/images/tochki.png" alt="" />
        </div>
      </div>
    </section>
  )
}
