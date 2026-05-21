import { useState } from 'react'
import './MilkFactsBlock.css'
import { useLang } from '../context/LanguageContext'

export default function MilkFactsBlock() {
  const { t } = useLang()
  const f = t.milkFacts
  const [state, setState] = useState('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answered, setAnswered] = useState(null)
  const [score, setScore] = useState(0)

  const questions = f.questions

  const handleAnswer = (idx) => {
    if (answered !== null) return
    setAnswered(idx)
    if (questions[currentQ].correct === idx) setScore(s => s + 1)
  }

  const finalScore = Math.round((score / questions.length) * 100)

  const handleNext = () => {
    if (currentQ + 1 >= questions.length) {
      setState('result')
    } else {
      setCurrentQ(q => q + 1)
      setAnswered(null)
    }
  }

  const handleRestart = () => {
    setState('intro')
    setCurrentQ(0)
    setAnswered(null)
    setScore(0)
  }

  const isActive = state !== 'intro'

  return (
    <section className="milk-facts" id="facts-game">
      <img src="/images/Uzor4.png" alt="" className="milk-facts__uzor" />

      <div className="milk-facts__inner">
        <img
          src="/images/molochnikMan.png"
          alt="Весёлый молочник"
          className={`milk-facts__man${isActive ? ' milk-facts__man--blur' : ''}`}
        />

        <h2 className={`milk-facts__title zametka-bold${isActive ? ' milk-facts__title--blur' : ''}`}>
          {f.title}
        </h2>

        <div className={`milk-facts__content${isActive ? ' milk-facts__content--active' : ''}`}>
          {state === 'intro' && (
            <>
              <div className="milk-facts__bubble">
                <p>{f.bubble}</p>
              </div>
              <button className="milk-facts__button" type="button" onClick={() => setState('quiz')}>
                {f.playBtn}
              </button>
            </>
          )}

          {state === 'quiz' && (
            <div className="milk-facts__quiz-card">
              <img src="/images/card-vicktorina.png" alt="" className="milk-facts__quiz-bg" aria-hidden="true" />
              {answered !== null && (
                <button className="milk-facts__next-btn" onClick={handleNext}>
                  {currentQ + 1 >= questions.length ? f.resultBtn : f.nextBtn} →
                </button>
              )}
              <p className="milk-facts__q-num">{f.questionLabel} {currentQ + 1}</p>
              <p className="milk-facts__q-text">{questions[currentQ].text}</p>
              <div className="milk-facts__answers">
                {questions[currentQ].options.map((opt, i) => {
                  const isSelected = answered === i
                  const isCorrect = questions[currentQ].correct === i
                  let cls = 'milk-facts__answer-btn'
                  if (isSelected) {
                    cls += isCorrect ? ' correct' : ' wrong'
                  } else if (answered !== null) {
                    cls += ' dim'
                  }
                  return (
                    <button
                      key={i}
                      className={cls}
                      onClick={() => handleAnswer(i)}
                      disabled={answered !== null && !isSelected}
                    >
                      <span className="milk-facts__answer-label">{opt.label}</span>
                      {isSelected && (
                        <span className="milk-facts__answer-exp">{opt.explanation}</span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {state === 'result' && (
            <div className="milk-facts__result-card">
              <img src="/images/card-vicktorina.png" alt="" className="milk-facts__quiz-bg" aria-hidden="true" />
              <button className="milk-facts__close-btn" onClick={handleRestart}>✕</button>
              <h3 className="milk-facts__result-title zametka-bold">
                {f.resultTitle}<br />{finalScore} {f.points}
              </h3>
              <p className="milk-facts__result-text">{f.resultDesc}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
