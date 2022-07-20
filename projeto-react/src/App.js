import './App.css'
//import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Gustavo" />
      <SayMyName nome="Jaime" />
      <Pessoa 
        nome="Jaime Lannister"
        idade="33"
        profissao="Senhor Comandante da Guarda Real"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  )
}

export default App;
