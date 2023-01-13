import { Service } from './Service'

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

class DashboardService extends Service<IDashboard> {
  path = 'dashboard'
}

export { DashboardService }
