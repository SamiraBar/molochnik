import { useState } from 'react'
import './Products.css'
import { useLang } from '../context/LanguageContext'

const productImgs = [
  '/images/pr-molokovkorobke.png',
  '/images/pr-moloko.png',
  '/images/pr-kefir.png',
  '/images/pr-smetana.png',
  '/images/pr-tvorog.png',
]

function ArrowIcon() {
  return (
    <svg className="products__arrow" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#B8E8FF"/>
      <path d="M11 11L21 21M21 21H14M21 21V14" stroke="#0033A1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ArrowBackIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="22" fill="white"/>
      <path d="M28 28L16 16M16 16H24M16 16V24" stroke="#0033A1" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M11 4L6 9L11 14" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M7 4L12 9L7 14" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MobileSlider({ pr }) {
  const [current, setCurrent] = useState(0)
  const [selectedFat, setSelectedFat] = useState(0)
  const [sliding, setSliding] = useState(false)

  const total = pr.items.length

  const goTo = (idx) => {
    if (idx === current || sliding) return
    setSliding(true)
    setTimeout(() => {
      setCurrent(idx)
      setSelectedFat(0)
      setSliding(false)
    }, 200)
  }

  const prev = () => goTo((current - 1 + total) % total)
  const next = () => goTo((current + 1) % total)

  const item = pr.items[current]

  return (
    <div className="products__mobile-slider">

      {/* Карточка — содержит изображение, стрелки и инфо */}
      <div className="products__mobile-nav">
        <div className="products__mobile-card">

          {/* Фон с узором — обрезается по border-radius */}
          <div className="products__mobile-card-bg">
            <img
              src="/images/product-uzor.png"
              alt=""
              className="products__mobile-card-uzor"
              aria-hidden="true"
            />
          </div>

          {/* Зона картинки — выходит за верхний край карточки */}
          <div className="products__mobile-card-img-area">
            <img
              src={productImgs[current]}
              alt={item.name}
              className={`products__mobile-card-img${sliding ? ' sliding' : ''}`}
            />
          </div>

          {/* Инфо блок внутри карточки */}
          <div className={`products__mobile-info${sliding ? ' sliding' : ''}`}>
            <h3 className="products__mobile-name">{item.name}</h3>
            <p className="products__mobile-sub">{item.sub}</p>

            {item.fats && item.fats.length > 0 && (
              <div className="products__mobile-fats">
                <span className="products__mobile-fat-label">{pr.fatLabel}</span>
                {item.fats.map((f, i) => (
                  <button
                    key={i}
                    className={`products__mobile-fat-btn${selectedFat === i ? ' active' : ''}`}
                    onClick={() => setSelectedFat(i)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            )}

            <p className="products__mobile-desc">{item.desc}</p>

            <div className="products__mobile-eco">
              <div className="products__mobile-eco-icon products__mobile-eco-icon--leaf">
                <img src="/images/pr-list.png" alt="" />
                <span className="products__mobile-eco-i">i</span>
              </div>
              {current === 3 && (
                <div className="products__mobile-eco-icon products__mobile-eco-icon--recycle">
                  <img src="/images/pr-recycle.png" alt="" />
                  <span className="products__mobile-eco-i">i</span>
                </div>
              )}
            </div>

            <div className="products__mobile-kbju">
              <span className="products__mobile-kbju-item">
                <strong>{pr.proteinLabel}</strong> {item.protein} {pr.gram}
              </span>
              <span className="products__mobile-kbju-item">
                <strong>{pr.fatLabel2}</strong> {item.fat} {pr.gram}
              </span>
              <span className="products__mobile-kbju-item">
                <strong>{pr.carbsLabel}</strong> {item.carbs} {pr.gram}
              </span>
            </div>

            <button className="products__mobile-buy">{pr.buy}</button>
          </div>

          {/* Стрелки внутри карточки */}
          <button
            className="products__mobile-arrow products__mobile-arrow--prev"
            onClick={prev}
            aria-label="Предыдущий продукт"
          >
            <ChevronLeft />
          </button>
          <button
            className="products__mobile-arrow products__mobile-arrow--next"
            onClick={next}
            aria-label="Следующий продукт"
          >
            <ChevronRight />
          </button>

        </div>
      </div>

      {/* Dots */}
      <div className="products__mobile-dots">
        {pr.items.map((_, i) => (
          <button
            key={i}
            className={`products__mobile-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Продукт ${i + 1}`}
          />
        ))}
      </div>

    </div>
  )
}

export default function Products() {
  const { t } = useLang()
  const pr = t.products
  const [active, setActive] = useState(null)
  const [selectedFat, setSelectedFat] = useState(1)

  const handleOpen = (i) => {
    setActive(i)
    setSelectedFat(1)
  }

  const handleClose = () => setActive(null)

  return (
    <section className="products" id="products">
      <div className="products__inner">
        <h2 className={`products__title zametka-bold${active !== null ? ' products__title--expanded' : ''}`}>
          {pr.title}
        </h2>

        {active === null ? (
          <div className="products__grid">
            {pr.items.map((p, i) => (
              <div key={i} className="products__item" onClick={() => handleOpen(i)}>
                <div className="products__card">
                  <div className="products__card-bg">
                    <img src="/images/product-uzor.png" alt="" className="products__card-uzor" aria-hidden="true" />
                  </div>
                  <img src={productImgs[i]} alt={p.name} className="products__img" />
                </div>
                <div className="products__footer">
                  <div className="products__info">
                    <p className="products__name">{p.name}</p>
                    <p className="products__sub">{p.sub}</p>
                  </div>
                  <ArrowIcon />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="products__expanded">
            <img src="/images/product-uzor.png" alt="" className="products__exp-uzor" aria-hidden="true" />
            <div className="products__exp-img-wrap">
              <img src={productImgs[active]} alt={pr.items[active].name} className="products__exp-img" />
            </div>
            <div className="products__exp-info">
              <h3 className="products__exp-name">{pr.items[active].name}</h3>
              <span className="products__exp-badge">{pr.items[active].type}</span>

              <div className="products__exp-fats">
                <span className="products__exp-fat-label">{pr.fatLabel}</span>
                {pr.items[active].fats.map((f, i) => (
                  <button
                    key={i}
                    className={`products__exp-fat-btn${selectedFat === i ? ' active' : ''}`}
                    onClick={() => setSelectedFat(i)}
                  >{f}</button>
                ))}
              </div>

              <p className="products__exp-desc">{pr.items[active].desc}</p>

              <div className="products__exp-eco">
                <div className="products__exp-eco-icon products__exp-eco-icon--leaf">
                  <img src="/images/pr-list.png" alt="" />
                  <span className="products__exp-eco-i">i</span>
                </div>
                {active === 3 && (
                  <div className="products__exp-eco-icon products__exp-eco-icon--recycle">
                    <img src="/images/pr-recycle.png" alt="" />
                    <span className="products__exp-eco-i">i</span>
                  </div>
                )}
              </div>

              <div className="products__exp-kbju">
                <div className="products__exp-kbju-row">
                  <span className="products__exp-kbju-label">{pr.proteinLabel}</span>
                  <span className="products__exp-kbju-val">{pr.items[active].protein} {pr.gram}</span>
                </div>
                <div className="products__exp-kbju-row">
                  <span className="products__exp-kbju-label">{pr.fatLabel2}</span>
                  <span className="products__exp-kbju-val">{pr.items[active].fat} {pr.gram}</span>
                </div>
                <div className="products__exp-kbju-row">
                  <span className="products__exp-kbju-label">{pr.carbsLabel}</span>
                  <span className="products__exp-kbju-val">{pr.items[active].carbs} {pr.gram}</span>
                </div>
              </div>
 
            </div>

            <button className="products__exp-back" onClick={handleClose} aria-label="Назад">
              <ArrowBackIcon />
            </button>
          </div>
        )}

        {/* Mobile slider */}
        <MobileSlider pr={pr} />
      </div>
    </section>
  )
}