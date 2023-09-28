import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderFood = styled.header`
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding: 60px 86px;
  font-size: 18px;

  margin-left: auto;
  margin-right: auto;
  width: 72vw;

  a {
    color: ${cores.salmao};
    text-decoration: none;
    font-weight: bold;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 56px;
`
export const LinkItem = styled.li`
  margin-right: 52px;
`
export const LinkCart = styled.a`
  display: flex;
  margin-right: 32px;
`
