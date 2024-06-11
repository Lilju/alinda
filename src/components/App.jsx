
import { Header } from "./Header"
import { Accueil } from "./Accueil"
import { Musique } from "./Musique"
import { Galerie } from "./Galerie"
import { Contact } from "./Contact"
import { Footer } from "./Footer"
import ScrollToTop from './ScrollToTop';
import "../styles/App.css"

function App() {
  return(<>
    <Header/>
    <Accueil/>
    <Musique/>
    <Galerie/>
    <Contact/>
    <Footer/>
    <ScrollToTop />
      </>)
}

export default App
