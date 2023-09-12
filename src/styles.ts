import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  verde: '#6ab04c',
  azul: '#4834d4',
  rosa: '#ff7979'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body {
  background-color: ${cores.azul};
  color: ${cores.branca};
  font-size: 30px;
}
`
