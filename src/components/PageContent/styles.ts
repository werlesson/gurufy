import { Card, Typography } from 'antd'
import styled from 'styled-components'
const { Title } = Typography

export const Wrapper = styled.main`
  // background: radial-gradient(
  //   circle,
  //   rgba(249, 252, 242, 1) 0%,
  //   rgba(231, 239, 253, 1) 100%
  // );
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
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitlePage = styled(Title)``
