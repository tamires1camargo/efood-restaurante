import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderFood = styled.header`
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding: 60px 50px;
  font-size: 18px;

  a {
    color: ${cores.salmao};
    text-decoration: none;
    font-weight: bold;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;
`
export const LinkCart = styled.a`
  display: flex;
`
