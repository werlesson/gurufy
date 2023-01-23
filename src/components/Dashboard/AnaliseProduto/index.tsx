import { Divider } from 'antd'
import { AnaliseProdutoProps, ChartProps } from 'models/PropsComponents'
import * as S from './styles'
import { BarChartOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { generateProdutoTipoChart } from '../../../utils/functions/charts'
import ChartSample from 'components/General/Chart'

export default function Totalizadores({
  dashboard,
  loading
}: AnaliseProdutoProps) {
  const [produtoTipoChartOptions, setProdutoTipoChartOptions] =
    useState<ChartProps>()

  useEffect(() => {
    console.log('DASHBOARD', dashboard)
    if (dashboard) {
      setProdutoTipoChartOptions(generateProdutoTipoChart(dashboard))
    }
  }, [dashboard])

  return (
    <S.Wraper>
      <S.Header>
        <S.TitleSection level={4}>Análise de Produtos</S.TitleSection>
        <Divider />
      </S.Header>
      <S.Content>
        <S.Slot1
          title="Receita por grupo de produto"
          info="Participação de receita por tipo de produto comercializado, demonstrando o comportamento de vendas no decorrer do ano/mês"
          withShadow
        >
          {loading ? (
            <S.Skeleton active>
              <BarChartOutlined style={{ fontSize: 64, color: '#ccc' }} />
            </S.Skeleton>
          ) : (
            // <div></div>
            <ChartSample
              options={produtoTipoChartOptions?.options}
              series={produtoTipoChartOptions?.series}
            />
          )}
        </S.Slot1>
        <S.Slot2
          title="Receita por grupo de produto"
          info="Participação acumulada de receita por tipo de produto comercializado"
          withShadow
        >
          <S.Skeleton active>
            <BarChartOutlined style={{ fontSize: 64, color: '#ccc' }} />
          </S.Skeleton>
        </S.Slot2>
        <S.Slot3
          title="Receita por tipo de produto"
          info="Gráfico com curva ABC de produtos mais comercializados no período"
          withShadow
        >
          <S.Skeleton active>
            <BarChartOutlined style={{ fontSize: 64, color: '#ccc' }} />
          </S.Skeleton>
        </S.Slot3>
        <S.Slot4
          title="Análise mensal de faturamento e quantidade de vendas"
          info="O gráfico demonstra a evolução temporal das vendas realizadas em valor total por mês e quantidade de itens vendidos.​ Esse gráfico é importante para termos visibilidade da curva de faturamento, considerando variações de quantidade e faturamento durante o ano, identificando principalmente pontos de baixa, seja por sazonalidade, estoque ou comportamento do mercado.​"
          withShadow
        >
          <S.Skeleton active>
            <BarChartOutlined style={{ fontSize: 64, color: '#ccc' }} />
          </S.Skeleton>
        </S.Slot4>
      </S.Content>
    </S.Wraper>
  )
}
