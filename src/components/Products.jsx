import './Products.css'
import { useLang } from '../context/LanguageContext'

const productImgs = [
  '/images/product-moloko.png',
  '/images/product-moloko2.png',
  '/images/product-kefir.png',
  '/images/product-smetana.png',
  '/images/product-tvorog.png',
]

function ArrowIcon() {
  return (
    <svg className="products__arrow" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#B8E8FF"/>
      <path d="M11 11L21 21M21 21H14M21 21V14" stroke="#0033A1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Products() {
  const { t } = useLang()
  const pr = t.products

  return (
    <section className="products" id="products">
      <div className="products__inner">
        <h2 className="products__title">{pr.title}</h2>
        <div className="products__grid">
          {pr.items.map((p, i) => (
            <div key={i} className="products__item">
              <div className="products__card">
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
      </div>
    </section>
  )
}
