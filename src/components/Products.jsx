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
        <h2 className="products__title zametka-bold">{pr.title}</h2>

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

              <button className="products__exp-buy">{pr.buy}</button>
            </div>

            <button className="products__exp-back" onClick={handleClose} aria-label="Назад">
              <ArrowBackIcon />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
