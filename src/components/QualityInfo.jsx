import './QualityInfo.css'
import { useLang } from '../context/LanguageContext'

export default function QualityInfo() {
  const { t } = useLang()
  const qi = t.qualityInfo

  return (
    <section className="qinfo" id="qinfo">

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

      {/* Грузовик — полупрозрачный, между первым и вторым пузырём */}
        <div className="qinfo__truck" aria-hidden="true">
            <img
                src="/images/gruzvoy.png"
                alt=""
                className="qinfo__truck-desktop"
            />

            <img
                src="/images/gruzovoi-mobile.png"
                alt=""
                className="qinfo__truck-mobile"
            />
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

        {/* Шаги-пузырьки с соединительными линиями */}
        <div className="qinfo__steps">
          {qi.steps.flatMap((step, i) => {
            const isLast = i === qi.steps.length - 1
            const items = [
              <div
                key={`step-${i}`}
                className={`qinfo__step qinfo__step--${step.type}${isLast ? ' qinfo__step--wide' : ''}`}
              >
                <p>{step.text}</p>
              </div>,
            ]
            /* Пунктирный коннектор после переходов left→right (шаги 0 и 2) */
            // if (i === 0 || i === 2) {
            //   items.push(
            //     <div key={`conn-${i}`} className="qinfo__connector" aria-hidden="true" />
            //   )
            // }
            return items
          })}
        </div>
      </div>

      {/* Пиалка — правый нижний угол */}
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
