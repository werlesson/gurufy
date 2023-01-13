import { Card, Typography } from 'antd'
import styled from 'styled-components'
const { Title } = Typography

export const Wrapper = styled.section`
  // background: radial-gradient(
  //   circle,
  //   rgba(249, 252, 242, 1) 0%,
  //   rgba(231, 239, 253, 1) 100%
  // );
  padding: 2rem 16px 0 16px;
  width: 100%;
  height: 100%;
  // padding: 3rem;
  // text-align: center;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
`

export const Content = styled(Card)`
  min-height: calc(100% - 40px);
  box-shadow: rgba(149,157,165,0.2) 0px 8px 24px; !important;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitlePage = styled(Title)`
  margin-bottom: 2rem !important;
`
