import Totalizadores from 'components/Dashboard/Totalizadores'
import AnaliseProduto from 'components/Dashboard/AnaliseProduto'
import MainLayout from 'components/Layout/MainLayout'
import PageContent from 'components/Layout/Pages/PageContent'
import { useEffect, useState } from 'react'
import { DashboardService } from 'services/DashboardService'
import explanationTotalizadores from '../utils/JSON/explanationTotalizadores.json'
import {
  formatCurrency,
  formatNumber,
  formatPercent
} from '../utils/functions/format'
import { Dashboard } from 'models/Dashboard'
import { ItemsTotalizadores } from 'models/PropsComponents'

export default function Home() {
  // SERVICES
  const Service = new DashboardService()
  const [loading, setLoading] = useState<boolean>(true)
  const [dashboard, setDashboard] = useState<Dashboard>()
  const [totalizadoresData, setTotalizadoresData] = useState<
    Array<ItemsTotalizadores>
  >([])

  useEffect(() => {
    setLoading(true)
    Service.get()
      .then((response) => {
        const { data } = response
        setDashboard(data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (dashboard) {
      setTotalizadoresData([
        {
          value: formatNumber(dashboard?.clientes_unicos),
          text: 'Quantidade de clientes únicos',
          info: explanationTotalizadores.quantidadeClientesUnicos
        },
        {
          value: formatNumber(dashboard?.total_vendas),
          text: 'Número absoluto de vendas',
          info: explanationTotalizadores.numeroAbsolutoVendas
        },
        {
          value: formatNumber(dashboard?.tempo_recompra),
          text: 'Tempo médio de recompra em meses',
          info: explanationTotalizadores.tempoMedioRecompraMeses
        },
        {
          value: formatCurrency(dashboard?.faturamento_total),
          text: 'Valor total de vendas',
          info: explanationTotalizadores.valorTotalVendas
        },
        {
          value: formatCurrency(dashboard?.ticket_medio),
          text: 'Ticket médio',
          info: explanationTotalizadores.ticketMedio
        },
        {
          value: formatNumber(dashboard?.frequencia_media),
          text: 'Frequência de compras por clientes',
          info: explanationTotalizadores.frequenciaComprasCliente
        },
        {
          value: formatNumber(dashboard?.novos_clientes),
          text: 'Novos clientes',
          info: explanationTotalizadores.novosClientes
        },
        {
          value: formatPercent(dashboard?.crescimento_clientes),
          text: 'Crescimento da base de clientes',
          info: explanationTotalizadores.crescimentoBaseClientes
        }
      ])
    }
  }, [dashboard])

  return (
    <PageContent title="Insight Sales" withoutContent={true}>
      <Totalizadores items={totalizadoresData} loading={loading} />
      <AnaliseProduto dashboard={dashboard} />
    </PageContent>
  )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
