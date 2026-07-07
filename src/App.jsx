import Nav from './components/Nav'
import Hero from './components/Hero'
import ChiSiamo from './components/ChiSiamo'
import Stats from './components/Stats'
import Servizi from './components/Servizi'
import Metodo from './components/Metodo'
import Team from './components/Team'
import CasiStudio from './components/CasiStudio'
import Contatti from './components/Contatti'
import Footer from './components/Footer'
import CursorDot from './components/CursorDot'
import Intro from './components/Intro'

export default function App() {
  return (
    <div className="relative">
      <Intro />
      <CursorDot />
      <Nav />
      <main>
        <Hero />
        <Stats />

        {/* Ogni sezione in una propria card arrotondata (liquid glass), impilate */}
        <div className="space-y-6 px-5 sm:px-8 md:space-y-8 lg:px-12">
          {[ChiSiamo, Servizi, Metodo, Team, CasiStudio, Contatti].map((Section, i) => (
            <div
              key={i}
              className="glass-panel mx-auto max-w-[1920px] overflow-hidden rounded-[2rem] md:rounded-[3rem]"
            >
              <Section />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
