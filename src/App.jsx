import { useEffect, useState } from 'react'
import { LanguageProvider } from './context/LanguageContext.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Quality from './components/Quality.jsx'
import QualityInfo from './components/QualityInfo.jsx'
import Products from './components/Products.jsx'
import Footer from './components/Footer.jsx'
import Planet from "./components/Planet.jsx";
import EcologyBlock from "./components/EcologyBlock.jsx";
import MilkFactsBlock from "./components/MilkFactsBlock.jsx";

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <LanguageProvider>
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        {/*<Quality />*/}
        <QualityInfo />
        <Products />
        <MilkFactsBlock />
          <EcologyBlock/>
        <Planet />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
