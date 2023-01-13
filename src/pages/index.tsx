import Totalizadores from 'components/Dashboard/Totalizadores'
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

interface IDashboard {
  clientes_unicos: number
  total_vendas: number
  tempo_recompra: number
  faturamento_total: number
  ticket_medio: number
  frequencia_media: number
  novos_clientes: number
  crescimento_clientes: number
}

interface Items {
  value: number | string
  text: string
  info?: string
}

export default function Home() {
  // SERVICES
  const Service = new DashboardService()

  const [dashboard, setDashboard] = useState<IDashboard>()
  const [totalizadoresData, setTotalizadoresData] = useState<Array<Items>>([])

  useEffect(() => {
    Service.get()
      .then((response) => {
        const { data } = response
        setDashboard(data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  useEffect(() => {
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
  }, [dashboard])

  return (
    <PageContent title="Insight Sales" withoutContent={true}>
      <Totalizadores items={totalizadoresData} />
    </PageContent>
  )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
