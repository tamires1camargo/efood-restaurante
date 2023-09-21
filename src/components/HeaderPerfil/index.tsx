import { HeaderFood, Links, LinkItem, LinkCart } from './styles'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'

const HeaderPerfil = () => (
  <HeaderFood style={{ backgroundImage: `url(${fundo})` }}>
    <Links>
      <LinkItem>
        <Link to="/">Restaurantes</Link>
      </LinkItem>
    </Links>
    <Link to="/">
      <img src={logo} alt="EFOOD" />
    </Link>
    <LinkCart href="#">0 - produto(s) no Carrinho</LinkCart>
  </HeaderFood>
)

export default HeaderPerfil
