import './MilkFactsBlock.css'

export default function MilkFactsBlock() {
    return (
        <section className="milk-facts" id="facts-game">
            <img
                src="/images/Uzor4.png"
                alt=""
                className="milk-facts__uzor"
            />

            <div className="milk-facts__inner">
                <img
                    src="/images/molochnikMan.png"
                    alt="Весёлый молочник"
                    className="milk-facts__man"
                />

                <h2 className="milk-facts__title zametka-bold">
                    Молочные факты
                </h2>

                <div className="milk-facts__content">

                    <div className="milk-facts__bubble">
                        <p></p>
                    </div>

                    <button className="milk-facts__button " type="button">
                        Хочу поиграть
                    </button>
                </div>
            </div>
        </section>
    )
}