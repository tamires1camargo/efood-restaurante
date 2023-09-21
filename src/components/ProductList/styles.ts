import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 32px 30px;
  margin-bottom: 100px;
  color: ${cores.branca};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin: 100px;
  margin-top: 40px;
  justify-content: center;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
