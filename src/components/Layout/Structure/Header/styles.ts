import { Layout } from 'antd'
import styled from 'styled-components'

const { Header } = Layout

export const HeaderPage = styled(Header)`
  padding: 0;
  background: #fff !important;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(149,157,165,0.2) 0px 2px 16px; !important;
`
