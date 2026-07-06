import Nav from './components/Nav'
import Hero from './components/Hero'
import ChiSiamo from './components/ChiSiamo'
import Stats from './components/Stats'
import Servizi from './components/Servizi'
import Metodo from './components/Metodo'
import Team from './components/Team'
import CasiStudio from './components/CasiStudio'
import Social from './components/Social'
import Contatti from './components/Contatti'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import CursorDot from './components/CursorDot'
import Intro from './components/Intro'
import ChalkAnnotation from './components/ChalkAnnotation'

export default function App() {
  return (
    <div className="relative">
      <Intro />
      <CursorDot />
      <ChalkAnnotation />
      <Nav />
      <main>
        <Hero />
        <Stats />

        {/* Rettangolo arrotondato centrato che avvolge SOLO: chi siamo, servizi,
            metodo, team, clienti e contatti. */}
        <div className="px-5 sm:px-8 lg:px-12">
          <div className="glass-panel mx-auto max-w-[1920px] overflow-hidden rounded-[2rem] md:rounded-[3rem]">
            <ChiSiamo />
            <Servizi />
            <Metodo />
            <Team />
            <CasiStudio />
            <Social />
            <Contatti />
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
