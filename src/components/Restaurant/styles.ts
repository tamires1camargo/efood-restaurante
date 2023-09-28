import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: transparent;
  border-color: ${cores.salmao};
  border: 1px solid;
  max-width: 474px;
  justify-content: center;
  align-items: center;
  position: relative;

  a {
    color: ${cores.branca};
    text-decoration: none;
  }

  ${TagContainer} {
    margin-left: 380px;
    position: absolute;
    margin-top: 24px;
    font-size: 14px;
  }

  ${ButtonContainer} {
    margin-left: 10px;
    margin-bottom: 8px;
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
export const Destaque = styled.div`
  background-color: ${cores.salmao};
  color: ${cores.branca};
  margin-left: 224px;
  position: absolute;
  margin-top: 24px;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
`
