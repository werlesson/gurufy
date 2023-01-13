import { Card as CardAntd } from 'antd'
import styled from 'styled-components'

export const Card = styled(CardAntd)`
  background-color: #fff;
  box-shadow: 0 8px 24px rgb(149 157 165 / 20%) !important;
`

export const Totalizadores = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  @media only screen and (min-width: 769px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
