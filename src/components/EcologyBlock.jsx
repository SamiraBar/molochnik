import './EcologyBlock.css'

export default function EcologyBlock() {
    return (
        <section className="ecology" id="ecology">
            <img
                src="/images/Union1.png"
                alt=""
                className="ecology__wave ecology__wave--top"
            />

            {/*<div className="ecology__inner">*/}
                <h2 className="ecology__title zametka-bold">
                    Забота об экологии
                </h2>



            <div className="ecology__text-box">
                <p>
                    Веселый Молочник заботится не только о качестве продукции,
                    но и о планете!
                </p>
            </div>
            <img
                src="/images/MILKA.png"
                alt="Весёлый молочник с коровой"
                className="ecology__milkman"
            />

            <img
                src="/images/mounts.png"
                alt=""
                className="ecology__mounts"
            />

            <img
                src="/images/Union.png"
                alt=""
                className="ecology__wave ecology__wave--bottom"
            />
        </section>
    )
}