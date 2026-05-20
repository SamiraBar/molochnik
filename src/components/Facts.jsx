import { useState } from 'react'
import './Facts.css'
import { useLang } from '../context/LanguageContext'

export default function Facts() {
  const { t } = useLang()
  const f = t.facts
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
    <section className="facts" id="facts">
      <div className="facts__inner">

        <h2 className={`facts__title zametka-bold${isActive ? ' facts__title--blur' : ''}`}>
          {f.title}
        </h2>

        <div className="facts__stage">
          {/* Персонаж — всегда виден, размывается при викторине */}
          <div className={`facts__character${isActive ? ' facts__character--blur' : ''}`}>
            <img src="/images/grandfather_kymyz.png" alt="" />
          </div>

          {/* Контент поверх персонажа */}
          {state === 'intro' && (
            <div className="facts__intro">
              <div className="facts__bubble">
                <p>{f.intro}</p>
              </div>
              <button className="facts__play-btn" onClick={() => setState('quiz')}>
                {f.playBtn}
              </button>
            </div>
          )}

          {state === 'quiz' && (
            <div className="facts__quiz-card">
              <img src="/images/card-vicktorina.png" alt="" className="facts__quiz-bg" aria-hidden="true" />
              {answered !== null && (
                <button className="facts__next-btn" onClick={handleNext}>
                  {currentQ + 1 >= questions.length ? f.resultBtn : f.nextBtn} →
                </button>
              )}
              <p className="facts__q-num">{f.questionLabel} {currentQ + 1}</p>
              <p className="facts__q-text">{questions[currentQ].text}</p>
              <div className="facts__answers">
                {questions[currentQ].options.map((opt, i) => {
                  const isSelected = answered === i
                  const isCorrect = questions[currentQ].correct === i
                  let cls = 'facts__answer-btn'
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
                      <span className="facts__answer-label">{opt.label}</span>
                      {isSelected && (
                        <span className="facts__answer-exp">{opt.explanation}</span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {state === 'result' && (
            <div className="facts__result-card">
              <img src="/images/card-vicktorina.png" alt="" className="facts__quiz-bg" aria-hidden="true" />
              <button className="facts__close-btn" onClick={handleRestart}>✕</button>
              <h3 className="facts__result-title zametka-bold">
                {f.resultTitle}<br />{score} {f.points}
              </h3>
              <p className="facts__result-text">{f.resultDesc}</p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
