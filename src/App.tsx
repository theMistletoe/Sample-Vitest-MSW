import './App.css'
import { SearchPokemon } from './components/SearchPokemon'
import Header from './components/Header'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <Header />
      <hr />
      <Counter />
      <hr />
      <SearchPokemon />
    </>
  )
}

export default App
