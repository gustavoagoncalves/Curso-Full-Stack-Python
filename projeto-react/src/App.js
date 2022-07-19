import './App.css'
import HelloWorld from './components/HelloWorld'

function App() {
  const nome = 'Gustavo'
  const novoNome = nome.toUpperCase()
  const url = 'https://via.placeholder.com/150'

  function sum(a, b){
    return a + b
  }

  return (
    <div className="App">
      <h1>React!</h1>
      <p>Meu primeiro APP</p>
      <p>Olá Sr. {nome}!</p>
      <p>Olá Sr. {novoNome}!</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
