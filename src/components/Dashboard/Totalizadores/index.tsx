import CardStatistic from 'components/General/CardStatistic'
import * as S from './styles'

interface Items {
  value: number | string
  text: string
  info?: string
}

interface Props {
  items: Array<Items>
}

export default function Totalizadores({ items }: Props) {
  return (
    <S.Totalizadores>
      {items.map((item, index) => (
        <CardStatistic
          key={`totalizado_index_${index}`}
          info={item.info}
          value={item.value}
          description={item.text}
        />
      ))}
    </S.Totalizadores>
  )
}
