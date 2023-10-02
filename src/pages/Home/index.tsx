import RestaurantList from '../../components/RestaurantList'
import Loja from '../../models/Loja'

import suchi from '../../assets/images/suchi.png'
import italianfood from '../../assets/images/italianfood.png'
import Header from '../../components/Header'
import FooterFood from '../../components/Footer'

const ofertas: Loja[] = [
  {
    id: 1,
    highlight: 'Destaque da semana',
    title: 'Hioki Suchi',
    grade: '4.9',
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: suchi
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italianfood
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italianfood
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italianfood
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italianfood
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italianfood
  }
]
const Home = () => (
  <>
    <div>
      <Header />
    </div>
    <RestaurantList lojas={ofertas} title={''} />
    <FooterFood />
  </>
)

export default Home
