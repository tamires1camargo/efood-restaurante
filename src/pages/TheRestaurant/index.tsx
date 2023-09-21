import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'

import ProductList from '../../components/ProductList'
import Items from '../../models/Items'

import pizza from '../../assets/images/pizza.png'
import FooterFood from '../../components/Footer'

const pratos: Items[] = [
  {
    name: 'Pizza Marguerita',
    details:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    photo: pizza
  },
  {
    name: 'Pizza Marguerita',
    details:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    photo: pizza
  },
  {
    name: 'Pizza Marguerita',
    details:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    photo: pizza
  },
  {
    name: 'Pizza Marguerita',
    details:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    photo: pizza
  },
  {
    name: 'Pizza Marguerita',
    details:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    photo: pizza
  },
  {
    name: 'Pizza Marguerita',
    details:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    photo: pizza
  }
]

const TheRestaurant = () => (
  <>
    <HeaderPerfil />
    <Banner />
    <ProductList items={pratos} title={''} />
    <FooterFood />
  </>
)

export default TheRestaurant
