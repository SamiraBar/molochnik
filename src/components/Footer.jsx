import './Footer.css'
import { useLang } from '../context/LanguageContext'

const hrefs = ['#ecology', '#quality', '#products', '#promo']

export default function Footer() {
  const { t } = useLang()
  const f = t.footer

  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#" className="footer__logo" aria-label="Весёлый молочник">
          <img src="/images/logo-footer.png" alt="Весёлый молочник" className="footer__logo-img" />
        </a>

        <nav className="footer__nav" aria-label="Навигация футера">
          {f.links.map((link, i) => (
            <a key={i} href={hrefs[i]} className="footer__link zametka-bold">{link}</a>
          ))}
        </nav>

        <a href="https://www.instagram.com/bishkeksut" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram">
          <img src="/images/insta.png" alt="insta" className="footer__insta-img" />
        </a>

        <p className="footer__note">{f.note}</p>
      </div>
    </footer>
  )
}
