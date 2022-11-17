import './App.css'
import Bio from './components/Bio'
import Footer from './components/Footer'
import {Search} from './components/Search'


function App() {
  return (

    <section className="App">
      <h1>Meu github search</h1>
      <Bio/>
      <Search/>
      <Footer text="Claudia de Jesus Dantas"/>
    </section>

  )
}

export default App
