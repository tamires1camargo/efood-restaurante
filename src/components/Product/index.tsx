import { Cardproduct, Titulo, Descricao } from './styles'
import { Link } from 'react-router-dom'

export type Props = {
  name: string
  details: string
  photo: string
}

const Product = ({ name, details, photo }: Props) => (
  <Cardproduct>
    <img src={photo} />
    <Titulo>{name}</Titulo>
    <Descricao>{details}</Descricao>
    <button>
      <Link to="/">Adicionar ao carrinho</Link>
    </button>
  </Cardproduct>
)

export default Product
