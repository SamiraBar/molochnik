import './Planet.css'

export default function Planet() {
    return (
        <section className="planet" id="ecology">
            <h2 className="planet__title zametka-bold">
                Что мы делаем <br />
                для планеты ежедневно?
            </h2>

            <div className="planet__cards">
                <article className="planet-card planet-card--package">
                    <img
                        src="/images/Vector.png"
                        alt=""
                        className="planet-card__pattern"
                    />

                    <img
                        src="/images/uzorTop.png"
                        alt=""
                        className="planet-card__pattern2"
                    />

                    <div className="planet-card__head">
                        <div className="planet-card__icon">
                            <img src="/images/strelki.png" alt="" />
                        </div>

                        <h3 className="planet-card__title">
                            Более перерабатываемая <br />
                            упаковка
                        </h3>
                    </div>

                    <p className="planet-card__text">
                        Веселый Молочник не просто обновил упаковку сметаны,
                        но и сделал её с заботой о природе.
                    </p>

                    <p className="planet-card__text">
                        Теперь она более экологичная за счёт того, что мы убрали картон.
                        Это облегчает процесс переработки.
                    </p>
                </article>

                <article className="planet-card planet-card--car">
                    <img
                        src="/images/Vector.png"
                        alt=""
                        className="planet-card__pattern"
                    />

                    <img
                        src="/images/uzorTop.png"
                        alt=""
                        className="planet-card__pattern2"
                    />

                    <div className="planet-card__head">
                        <div className="planet-card__icon">
                            <img src="/images/car.png" alt="" />
                        </div>

                        <h3 className="planet-card__title">
                            Электро-автопарк
                        </h3>
                    </div>

                    <p className="planet-card__text">
                        Завод Бишкексут используем на своей территории электро-автопарк.
                        В 2025 году мы его обновили. Теперь у нас 7 электромобилей,
                        а ещё один электро-молоковоз и электропарк.
                    </p>
                </article>
            </div>
        </section>
    )
}