import MeuComponente from "./components/MeuComponente"

function App() {
  return (
    <div>
      <h1>meu programa</h1>
      <MeuComponente/>
      <MeuBotao/>

    </div>
    

  )
}
function MeuBotao(){
  return (
    <button>Clique Aqui</button>
  )
}


export default App
