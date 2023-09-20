import './App.css';
import Abertura from './paginas/abertura/Abertura';
import Beneficios from './paginas/beneficios/Beneficios';
import Depoimentos from './paginas/depoimentos/Depoimentos';
import Sobre from './paginas/sobre/Sobre';

function App() {
  
  return (
    <>
      <div className='geral'>
        <Abertura/>
        <Beneficios/>
        <Depoimentos/>
        <Sobre/>
      </div>
    </>
  )
}

export default App
