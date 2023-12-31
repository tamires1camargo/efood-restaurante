import Tag from '../Tag'

import { Card, Titulo, Descricao, Destaque } from './styles'
import star from '../../assets/images/star.png'
import { ButtonContainer } from '../Button/styles'
import { Link } from 'react-router-dom'

export type Props = {
  title: string
  grade: string
  category: string
  description: string
  image: string
  highlight: string
}

const Restaurant = ({
  title,
  grade,
  category,
  description,
  image,
  highlight
}: Props) => (
  <Card>
    <Destaque>{highlight}</Destaque>
    <Tag>{category}</Tag>
    <img src={image} />
    <Titulo>
      {title}
      <span>
        {grade} <img src={star} alt="estrela" />
      </span>
    </Titulo>
    <Descricao>{description}</Descricao>
    <ButtonContainer>
      <Link to="/therestaurant">Saiba mais</Link>
    </ButtonContainer>
  </Card>
)

export default Restaurant
