import CardStatistic from 'components/General/CardStatistic'
import * as S from './styles'

interface Items {
  value: number | string
  text: string
  info?: string
}

interface Props {
  items: Array<Items>
  loading: boolean
}

export default function Totalizadores({ items, loading }: Props) {
  return (
    <S.Totalizadores>
      {items.map((item, index) => (
        <CardStatistic
          key={`totalizado_index_${index}`}
          info={item.info}
          value={item.value}
          description={item.text}
          loading={loading}
        />
      ))}
    </S.Totalizadores>
  )
}
