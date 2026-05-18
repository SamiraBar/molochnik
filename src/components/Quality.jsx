import './Quality.css'

export default function Quality() {
  return (
    <section className="quality" id="quality">

      {/* Корова — выглядывает из левого нижнего угла секции */}
      <div className="quality__cow" aria-hidden="true">
        <img src="/images/corova.png" alt="" />
      </div>

      <div className="quality__inner">
        <div className="quality__stage">

          {/* Горы — фоновый слой снизу */}
          <div className="quality__landscape" aria-hidden="true">
            <img src="/images/gory.png" alt="" />
          </div>

          {/* Видео — верхняя правая часть */}
          <div className="quality__video">
            <button className="quality__play" aria-label="Смотреть видео">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="34" stroke="white" strokeWidth="2.5" strokeOpacity="0.8" />
                <path d="M29 22L52 36L29 50V22Z" fill="white" fillOpacity="0.9" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Белая волна внизу */}
      <div className="quality__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,55 C200,90 400,20 720,55 C900,75 1100,25 1440,55 L1440,90 L0,90 Z" fill="white"/>
        </svg>
      </div>

    </section>
  )
}
