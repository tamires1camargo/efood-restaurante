import { HeaderFood, Links, LinkItem, LinkCart } from './styles'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'

const HeaderPerfil = () => (
  <div className="container">
    <HeaderFood style={{ backgroundImage: `url(${fundo})` }}>
      <Links>
        <LinkItem>
          <Link to="/">Restaurantes</Link>
        </LinkItem>
      </Links>
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <Link to="/">
        <LinkCart href="#">0 - produto(s) no Carrinho</LinkCart>
      </Link>
    </HeaderFood>
  </div>
)

export default HeaderPerfil
