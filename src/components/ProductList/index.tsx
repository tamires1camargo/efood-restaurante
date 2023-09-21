import Product from '../Product'

import { Container, List } from './styles'
import Items from '../../models/Items'

type Props = {
  title: string
  items: Items[]
}

const ProductList = ({ items }: Props) => (
  <Container>
    <div className="container">
      <List>
        {items.map((loja) => (
          // eslint-disable-next-line react/jsx-key
          <Product name={loja.name} details={loja.details} photo={loja.photo} />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
