import { InfoCircleOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import * as S from './styles'

const { Title } = Typography

interface Props {
  children?: React.ReactNode
  title?: string
  info?: string
  className?: string
}

export default function Card({ children, title, info, className }: Props) {
  return (
    <S.Card className={className}>
      <S.CardHeader>
        {title && <Title level={5}>{title}</Title>}
        {info && (
          <S.CardHeaderMore title={info} placement="right">
            <InfoCircleOutlined />
          </S.CardHeaderMore>
        )}
      </S.CardHeader>
      <S.CardContent>{children}</S.CardContent>
    </S.Card>
  )
}
