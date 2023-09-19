import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: transparent;
  border-color: ${cores.salmao};
  border-style: solid;
  max-width: 478px;
  justify-content: center;
  align-items: center;
  position: relative;

  ${TagContainer} {
    margin-left: 380px;
    position: absolute;
    margin-top: 24px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 6px;
  margin-bottom: 8px;
  margin-left: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 8px;
`
