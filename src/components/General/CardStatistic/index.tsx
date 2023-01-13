import { Typography } from 'antd'
import * as S from './styles'

interface Props {
  // children?: React.ReactNode | string | number
  // title?: string
  info?: string
  value?: string | number
  description?: string
}

export default function CardStatistic({ info, value, description }: Props) {
  return (
    <S.CardStatistic info={info}>
      <S.CardStatisticContent>
        <Typography.Title level={3}>{value}</Typography.Title>
        <Typography.Text style={{ textAlign: 'center' }}>
          {description}
        </Typography.Text>
      </S.CardStatisticContent>
    </S.CardStatistic>
  )
}
