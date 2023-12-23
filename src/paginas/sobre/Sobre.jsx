import './Sobre.css';
import imagemSobre from '../../assets/imgsobre.png';
import Button from '../../components/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

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
          <div className='iconsDiv desktop'>
            <a href='https://api.whatsapp.com/send?phone=554195579692' target="_blank" rel="whatsapp">
              <WhatsAppIcon className='icons' sx={{ fontSize: 50 }} />
            </a>
            <a href='https://www.instagram.com/denisesalvii/' target="_blank" rel="instagram">
              <InstagramIcon className='icons' sx={{ fontSize: 50 }} />
            </a>
          </div>
        </div>
        <div className='contentSobre'>
          <div className='tituloSobre'>
            <h2>Quem é Denise Salvi?</h2>

          </div>
          <div>
            <h5 className='textSobre'>Oláaaa maravilhosas, eu sou a Denise Salvi, tenho 31 anos, me formei em Tecnologia em
              Mecatrônica, mas eu decidi mudar de profissão logo em seguida e fui para área da beleza.
            </h5>
            <h5 className='textSobre'>Quando iniciei em 2016 vi a necessidade de aprender sobre outras áreas além de só
              técnica para conseguir me posicionar de forma correta no mercado e com isso me apaixonei
              pela área de marketing.
            </h5>
            <h5 className='textSobre'>Comecei a estudar sobre tudo relacionado a marketing e vendas e acabei desenvolvendo o
              meu método de captação de clientes e alunas de forma natural sem enrolação sem ser forçado.
            </h5>
            <h5 className='textSobre'>E esse método me ajudou a recomeçar do ZERO no Rio de Janeiro, hoje com menos de 1 ano
              atendendo em outra cidade onde NINGUÉM me conhecia eu já consegui uma agenda cheia.
            </h5>

          </div>
          <div className="buttonSobre mobile">
            <Button />
          </div>
          <div className='textSobre iconsDiv mobile'>
            <a href='https://api.whatsapp.com/send?phone=554195579692' target="_blank" rel="whatsapp">
              <WhatsAppIcon className='icons' sx={{ fontSize: 50 }} />
            </a>
            <a href='https://www.instagram.com/denisesalvii/' target="_blank" rel="instagram">
              <InstagramIcon className='icons' sx={{ fontSize: 50 }} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sobre