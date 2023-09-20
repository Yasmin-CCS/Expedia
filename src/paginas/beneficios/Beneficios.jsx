import './Beneficios.css';
import CheckIcon from '../../assets/check.svg';
import Button from '../../components/Button';

function Beneficios() {

  return (
    <>
      <div className="beneficiosPage">
        <div className='beneficiosContent'>
        <div className='textBeneficios'>
          <h4>Neste curso, você irá descobrir os segredos por trás das <span>campanhas que viralizam</span>,
            das <span>postagens que cativam</span> e das estratégias que geram <span>resultados reais</span>.
          </h4>

          <h4>Não se contente com uma presença online mediana. É hora de <span>elevar seu jogo </span>
            e <span>transformar</span> suas redes sociais em uma <span>máquina de sucesso</span>. </h4>

        <div className="buttonGeral desktop">
          <Button />
        </div>
        </div>
    
        <div className='boxTexto boxTextoBeneficios'>
          <h4>O que você vai aprender:</h4>
          <div className="bulletList">
            <img src={CheckIcon} alt="Ícone" />
            <h5>Criar Conteúdo Cativante </h5>
          </div>
          <div className="bulletList">
            <img src={CheckIcon} alt="Ícone" />
            <h5>Maximizar o Alcance e Engajamento</h5>
          </div>
          <div className="bulletList">
            <img src={CheckIcon} alt="Ícone" />
            <h5>Transformar Seguidores em Clientes</h5>
          </div>
          <div className="bulletList">
            <img src={CheckIcon} alt="Ícone" />
            <h5>Analisar e Medir o Sucesso</h5>
          </div>
          <div className="bulletList">
            <img src={CheckIcon} alt="Ícone" />
            <h5>Como construir um Storytelling</h5>
          </div>
        </div>

        <div className="buttonGeral mobile">
          <Button />
        </div>
        </div>

        <div className='beneficioBoxes'>
          <div className='boxTexto'>
            <h4>Personalização para seu Negócio:</h4>
            <div className="textBoxText">
              <h5>Não importa o seu nicho, tamanho ou setor -
                nossas dicas são adaptáveis para se ajustar às necessidades exclusivas do seu negócio.
              </h5>
            </div>
          </div>

          <div className='boxTexto'>
            <h4>Acompanhamento Contínuo:</h4>
            <div className="textBoxText">
              <h5>Fique atualizado com as <span> tendências </span> em constante mudança das
                redes sociais e ajuste suas <span>estratégias</span> conforme necessário.
              </h5>
            </div>
          </div>

          <div className='boxTexto'>
            <h4>Comunidade de Apoio: </h4>
            <div className="textBoxText">
              <h5>Faça parte de uma <span>comunidade</span> de colegas empreendedores que
                compartilham seus <span>objetivos</span> e desafios.
              </h5>
            </div>
          </div>
        </div>
        <div className="buttonGeral">
          <Button />
        </div>
        
        <div className=' textBeneficiosBonus bonus'>
            <h4>BÔNUS: </h4>
            <div className="textBoxTextBonus bonus">
              <h5>Um manual com mais de scripts de vendas para não levar vácuo da sua cliente no whatsapp!
              </h5>
            </div>
          </div>

      </div >
    </>
  )
}

export default Beneficios