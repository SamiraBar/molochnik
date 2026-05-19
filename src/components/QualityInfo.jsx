import './QualityInfo.css'

export default function QualityInfo() {
  return (
    <section className="qinfo" id="qinfo">

      {/* Декоративный узор 1 — верх слева */}
      <div className="qinfo__uzor qinfo__uzor--1" aria-hidden="true">
        <img src="/images/uz1.png" alt="" />
      </div>
      {/* Декоративный узор 2 — центр */}
      <div className="qinfo__uzor qinfo__uzor--2" aria-hidden="true">
        <img src="/images/uz1.png" alt="" />
      </div>
      {/* Узор справа на весь блок */}
      <div className="qinfo__uzor qinfo__uzor--right" aria-hidden="true">
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
        <h2 className="qinfo__title">ЗАБОТА О КАЧЕСТВЕ</h2>

        <div className="qinfo__benefits">

          <div className="qinfo__benefit">
            <img src="/images/milk_jug_icon.png" alt="" className="qinfo__icon" />
            <p>Поставки свежего молока каждый день</p>
          </div>

          <div className="qinfo__benefit">
            <img src="/images/farm_icon.png" alt="" className="qinfo__icon" />
            <p>Работаем только с проверенными фермами Кыргызстана</p>
          </div>

          <div className="qinfo__benefit">
            <img src="/images/quality_check_icon.png" alt="" className="qinfo__icon" />
            <p>Строгий контроль качества на всех этапах производства</p>
          </div>

        </div>
      </div>

      {/* Молочник снизу слева */}
      <div className="qinfo__grandfather" aria-hidden="true">
        <img src="/images/grandfather_kymyz.png" alt="" />
      </div>

    </section>
  )
}
