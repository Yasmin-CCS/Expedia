import './Abertura.css'
import imagemAbertura from '../../assets/imgabertura.png'
import Button from '../../components/Button';

function Abertura() {

  return (
    <>
      <div className="aberturaPage">
        <div className="imagemAbertura">
          <img src={imagemAbertura} alt='foto da host do curso' />
          <div className="sombra" />
        </div>
        <div className='conteudoAbertura'>
          <div className='titulo'>
            <div className='textComLinha'>
              <div className='linha' />
              <h4>CURSO</h4>
              <div className='linha' />
            </div>
            <h2>Descomplica nas redes sociais 2.0</h2>
          </div>
          <div className='textAbertura'>
            <h5>Você já se perguntou como as marcas de sucesso conquistam milhares de seguidores, engajamento
              constante e transformam fãs em clientes leais nas redes sociais? Não é magia - é
              <span> estratégia!</span></h5>
          </div>
          <div className="buttonGeral">
            <Button />
          </div>
        </div>
      </div>
    </>
  )
}

export default Abertura