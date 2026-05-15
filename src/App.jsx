import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Quality from './components/Quality.jsx'
import Products from './components/Products.jsx'
import Facts from './components/Facts.jsx'
import Ecology from './components/Ecology.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Quality />
        <Products />
        <Facts />
        <Ecology />
          <Products />
      </main>
      <Footer />
    </>
  )
}
