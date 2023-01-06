import { Breadcrumb } from 'antd'
import * as S from './styles'

interface Props {
  title?: string
  children?: React.ReactNode
  breadcrumb?: Array<string>
}

const PageContent = ({ children, title, breadcrumb }: Props) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.TitlePage level={4}>{title}</S.TitlePage>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {breadcrumb?.map((item, index) => (
            <Breadcrumb.Item key={item + index}>{item}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default PageContent
