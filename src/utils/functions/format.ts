export const formatNumber = (num: number) =>
  new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(num)

export const formatCurrency = (num: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2
  }).format(num)

export const formatPercent = (num: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    maximumFractionDigits: 2
  }).format(num)

export const formatDate = (data: string) =>
  new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(data))
