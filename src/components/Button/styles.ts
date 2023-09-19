import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.fundoclaro};
  color: ${cores.salmao};
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.fundoclaro};
  color: ${cores.salmao};
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
