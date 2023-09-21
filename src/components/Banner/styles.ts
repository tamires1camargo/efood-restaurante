import styled from 'styled-components'

import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;
  color: ${cores.branca};

  span {
    font-weight: 100;
    font-size: 32px;
    position: absolute;
    margin-top: 58px;
    left: 170px;
  }

  h3 {
    font-weight: 900;
    font-size: 32px;
    position: absolute;
    margin-top: 187px;
    left: 170px;
  }
`
