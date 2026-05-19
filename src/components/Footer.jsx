import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <a href="#" className="footer__logo" aria-label="Весёлый молочник">
                    <img
                        src="/images/logo-footer.png"
                        alt="Весёлый молочник"
                        className="footer__logo-img"
                    />
                </a>

                <nav className="footer__nav" aria-label="Навигация футера">
                    <a href="#ecology" className="footer__link zametka-bold">Об экологии</a>
                    <a href="#quality" className="footer__link zametka-bold">О качестве</a>
                    <a href="#products" className="footer__link zametka-bold">Продукция</a>
                    <a href="#promo" className="footer__link zametka-bold">Промо</a>
                </nav>

                <a
                    href="#"
                    className="footer__social"
                    aria-label="Instagram"
                >
                    <img
                        src="/images/insta.png"
                        alt="insta"
                        className="footer__insta-img"
                    />
                </a>

                <p className="footer__note">
                    Информация носит справочный характер и не является публичной офертой,
                    может быть изменена в любое время производителем и тд
                </p>
            </div>
        </footer>
    )
}