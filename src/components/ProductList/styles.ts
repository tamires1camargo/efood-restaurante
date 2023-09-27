import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 32px 60px;
  margin-bottom: 100px;
  color: ${cores.branca};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  grid-row-gap: 20px;
  column-gap: 20px;
  padding: 8px 360px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
