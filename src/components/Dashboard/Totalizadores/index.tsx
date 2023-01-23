import CardStatistic from 'components/General/CardStatistic'
import { TotalizadoresProps } from 'models/PropsComponents'
import * as S from './styles'

export default function Totalizadores({ items, loading }: TotalizadoresProps) {
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
