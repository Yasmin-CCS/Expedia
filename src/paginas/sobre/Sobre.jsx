import './Sobre.css';
import imagemSobre from '../../assets/imgsobre.png';
import Button from '../../components/Button';

function Sobre() {

  return (
    <>
      <div className="sobrePage">
        <div className='esquerdaSobre'>
        <div className="imagemSobre">
          <img src={imagemSobre} alt='foto da host do curso' />
          <div className="sombra" />
        </div>
          <div className="buttonSobre desktop">
            <Button />
          </div>
          </div>
        <div className='contentSobre'>
          <div className='tituloSobre'>
            <h2>Quem é Denise Salvi?</h2>

          </div>
          <div>
            <h5  className='textSobre'>Oláaaa maravilhosas, eu sou a Denise Salvi, tenho 31 anos, me formei em Tecnologia em 
              Mecatrônica, mas eu decidi mudar de profissão logo em seguida e fui para área da beleza.
            </h5>
            <h5  className='textSobre'>Quando iniciei em 2016 eu vi a necessidade de aprender sobre outras áreas além de só 
              técnica para conseguir me posicionar de forma correta no mercado e com isso me apaixonei 
              pela área de marketing.
            </h5>
            <h5  className='textSobre'>Comecei a estudar sobre tudo relacionado a marketing e vendas e acabei desenvolvendo o
              meu método de captação de clientes e alunas de forma natural sem enrolação sem ser forçado.
            </h5>
            <h5  className='textSobre'>E esse método me ajudou a recomeçar do ZERO no Rio de Janeiro, hoje com menos de 1 ano 
                atendendo em outra cidade aonde NINGUEM me conhecia eu já consegui uma agenda cheia.
            </h5>
          </div>
            <div className="buttonSobre mobile">
            <Button />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sobre