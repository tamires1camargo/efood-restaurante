import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Cardproduct = styled.div`
  background-color: ${cores.salmao};
  color: ${cores.branca}
  justify-content: center;
  align-items: center;
  position: relative;
  border: 5px solid;
  max-width: 360px;

  img {
  width: 336px;
  height: 167px;
  margin: 8px;
  }

  a {
    color: ${cores.salmao};
    text-decoration: none;
  }


  ${TagContainer} {
    margin-left: 380px;
    position: absolute;
    margin-top: 24px;
    font-size: 16px;
  }

  button {
    margin-left: 6px;
    margin-bottom: 10px;
    border: none;
    font-weight: bold;
    font-size: 18px;
    background-color: ${cores.fundoclaro};
    color: ${cores.salmao}
    display: flex-inline;
    padding: 8px 82px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 6px;
  margin-bottom: 8px;
  margin-left: 10px;

  span {
    display: flex-inline;
    margin-right: 5px;
    position: absolute;
    right: 0px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  padding: 8px;
`
