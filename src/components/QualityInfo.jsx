import './QualityInfo.css'
import { useLang } from '../context/LanguageContext'

export default function QualityInfo() {
  const { t } = useLang()
  const qi = t.qualityInfo
  return (
    <section className="qinfo" id="qinfo">

      {/* Верхняя волна */}
      <div className="qinfo__wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,90 C240,30 480,140 720,80 C960,20 1200,120 1440,70 L1440,150 L0,150 Z" fill="#F9FDFF"/>
        </svg>
      </div>

      {/* Узор слева */}
      <div className="qinfo__uzor qinfo__uzor--left" aria-hidden="true">
        <img src="/images/uz1.png" alt="" />
      </div>

      {/* Корова — верхний левый угол */}
      <div className="qinfo__cow" aria-hidden="true">
        <img src="/images/cow_watercolor.png" alt="" />
      </div>

      {/* Речевое облако */}
      <div className="qinfo__bubble" aria-hidden="true">
        <img src="/images/cow_speech_cloud.png" alt="" />
      </div>

      {/* Контент */}
      <div className="qinfo__inner">
        <h2 className="qinfo__title zametka-bold">{qi.title}</h2>

        <div className="qinfo__benefits">

          <div className="qinfo__benefit">
            <img src="/images/milk_jug_icon.png" alt="" className="qinfo__icon" />
            <p>{qi.benefits[0]}</p>
          </div>

          <div className="qinfo__benefit">
            <img src="/images/farm_icon.png" alt="" className="qinfo__icon" />
            <p>{qi.benefits[1]}</p>
          </div>

          <div className="qinfo__benefit">
            <img src="/images/quality_check_icon.png" alt="" className="qinfo__icon" />
            <p>{qi.benefits[2]}</p>
          </div>

        </div>

        {/* Шаги-пузырьки */}
        <div className="qinfo__steps">
          {qi.steps.map((step, i) => (
            <div key={i} className={`qinfo__step qinfo__step--${step.type}`}>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Грузовик с маршрутом */}
      <div className="qinfo__truck" aria-hidden="true">
        <img src="/images/gruzvoy.png" alt="" />
      </div>

      {/* Пиалка */}
      <div className="qinfo__pialka" aria-hidden="true">
        <img src="/images/pialka.png" alt="" />
      </div>

      {/* Молочник снизу слева */}
      <div className="qinfo__grandfather" aria-hidden="true">
        <img src="/images/grandfather_kymyz.png" alt="" />
      </div>

    </section>
  )
}
