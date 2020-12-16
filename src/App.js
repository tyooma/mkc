import { ArtResidence } from './sections/ArtResidence'
import { Curators } from './sections/Curators'
import { Footer } from './sections/Footer'
import { GoldenFest } from './sections/GoldenFest'
import { Header } from './sections/Header'
import { Partners } from './sections/Partners'
import { Sesam } from './sections/Sesam'
import { Zosya } from './sections/Zosya'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ArtResidence />
      <Sesam />
      <Zosya />
      <GoldenFest />
      <Curators />
      <Partners />
      <Footer />
    </div>
  )
}

export default App
