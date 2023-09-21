import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  salmao: '#E66767',
  fundoclaro: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  text-decoration: none;
  list-style: none;
}

body {
  background-color: ${cores.branca};
  color: ${cores.salmao};
  font-size: 30px;
}
`
