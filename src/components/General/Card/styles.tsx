import { Card as CardAntd, Tooltip } from 'antd'
import styled from 'styled-components'

export const Card = styled(CardAntd)``

export const CardHeader = styled.article`
  position: relative;
`

export const CardHeaderMore = styled(Tooltip)`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  z-index: 1;
`

export const CardContent = styled.article`
  position: relative;
`
