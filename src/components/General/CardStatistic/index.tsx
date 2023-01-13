import { Skeleton, Typography } from 'antd'
import * as S from './styles'

interface Props {
  // children?: React.ReactNode | string | number
  // title?: string
  info?: string
  value?: string | number
  description?: string
  loading?: boolean
}

export default function CardStatistic({
  info,
  value,
  description,
  loading
}: Props) {
  return (
    <S.CardStatistic info={info}>
      <S.CardStatisticContent>
        {loading ? (
          <Skeleton.Button active style={{ marginBottom: '1rem' }} />
        ) : (
          <Typography.Title level={3}>{value}</Typography.Title>
        )}

        {loading ? (
          <Skeleton.Input active />
        ) : (
          <Typography.Text style={{ textAlign: 'center' }}>
            {description}
          </Typography.Text>
        )}
      </S.CardStatisticContent>
    </S.CardStatistic>
  )
}
