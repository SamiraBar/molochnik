import './EcologyBlock.css'
import { useLang } from '../context/LanguageContext'

export default function EcologyBlock() {
    const { t } = useLang()
    const e = t.ecology

    return (
        <section className="ecology" id="ecology">
            <img
                src="/images/Union1.png"
                alt=""
                className="ecology__wave ecology__wave--top"
            />

            <h2 className="ecology__title zametka-bold">
                {e.title}
            </h2>

            <div className="ecology__text-box">
                <p>{e.desc}</p>
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
