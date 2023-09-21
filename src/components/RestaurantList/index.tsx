import Restaurant from '../Restaurant'

import { Container, List } from './styles'
import Loja from '../../models/Loja'

type Props = {
  title: string
  lojas: Loja[]
}

const RestaurantList = ({ title, lojas }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {lojas.map((loja) => (
          <Restaurant
            key={loja.id}
            title={loja.title}
            grade={loja.grade}
            category={loja.category}
            description={loja.description}
            image={loja.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
