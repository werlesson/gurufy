export interface Dashboard {
  clientes_unicos: number
  total_vendas: number
  tempo_recompra: number
  faturamento_total: number
  ticket_medio: number
  frequencia_media: number
  novos_clientes: number
  crescimento_clientes: number
  grafico_produtos: Array<GraficoProduto>
}

interface GraficoProduto {
  data: Array<number>
  name: string
}
