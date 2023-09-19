import Tag from '../Tag'

import { Card, Titulo, Descricao } from './styles'

import suchi from '../../assets/images/suchi.png'

const Restaurant = () => (
  <Card>
    <Tag>Japonesa</Tag>
    <img src={suchi} alt="suchi" />
    <Titulo>Nome do Restaurante</Titulo>
    <Descricao>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
      sem sair do lar com nosso delivery!
    </Descricao>
    <button>Saiba mais</button>
  </Card>
)

export default Restaurant
