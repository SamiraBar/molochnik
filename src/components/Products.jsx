import './Products.css'

const products = [
  { img: '/images/product-moloko.png',  name: 'Молоко',          sub: '3,2%' },
  { img: '/images/product-moloko2.png', name: 'Молоко',          sub: '2,5%' },
  { img: '/images/product-kefir.png',   name: 'Кефирный напиток', sub: '2,5%' },
  { img: '/images/product-smetana.png', name: 'Сметана',         sub: '20%'  },
  { img: '/images/product-tvorog.png',  name: 'Творог',          sub: '9%'   },
]

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="products__container">
        <h2 className="products__title">Продукция</h2>
        <div className="products__grid">
          {products.map((p, i) => (
            <div key={i} className="products__item">
              <div className="products__img-wrap">
                <img src={p.img} alt={p.name} />
              </div>
              <p className="products__name">{p.name}</p>
              <p className="products__sub">{p.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
