import { HeaderBar, Logo, Slogan } from './styles'

import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
    <a href="/">
      <Logo src={logo} alt="eFood" />
    </a>
    <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
  </HeaderBar>
)

export default Header
