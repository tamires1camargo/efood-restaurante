import { Imagem } from './styles'

import banner from '../../assets/images/banner.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${banner})` }}>
    <div>
      <span>Italiana</span>
      <h3>La Dolce Vita Trattoria</h3>
    </div>
  </Imagem>
)

export default Banner
