import './Depoimentos.css'
import Button from '../../components/Button'

function Depoimentos() {

  return (
    <>
      <div className='depoimentosPage'>
        <h1>Depoimentos</h1>
        <div className='contentDepoimentos'>
          <div>
        <div className='boxTexto boxDepoimentos'>
          <h5>De ontem para hoje, já vendi 2 cursos!</h5><h5> Que dica incrível e simples que você deu!</h5>
        </div>
        <div className="buttonSobre desktop">
            <Button />
        </div>
        </div>
        <div className='boxTexto boxDepoimentos'>
          <h5>Eu amo o seu trabalho como social media. Cheguei com a ideia e você deu forma a tudo, 
            é incrível! </h5><h5>A maneira como você estrutura a agenda de conteúdo é excelente. Sua criatividade 
            é única, amei!</h5>
        </div>
        <div className="buttonSobre mobile">
            <Button />
        </div>
        </div>
      </div>
    </>
  )
}

export default Depoimentos