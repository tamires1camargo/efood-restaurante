import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'
import RestaurantList from './components/RestaurantList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <RestaurantList title={''} />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
