import { FooterFood, Logofooter, Redesfooter, Rodape } from './styles'

import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import redes_sociais from '../../assets/images/redes_sociais.png'

const Footer = () => (
  <FooterFood style={{ backgroundImage: `url(${fundo})` }}>
    <a href="/">
      <Logofooter src={logo} alt="eFood" />
    </a>
    <a href="/">
      <Redesfooter src={redes_sociais} alt="redes" />
    </a>
    <Rodape>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Rodape>
  </FooterFood>
)

export default Footer
