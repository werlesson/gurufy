export const formatNumber = (num) =>
  new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(num)

export const formatCurrency = (num) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2
  }).format(num)

export const formatPercent = (num) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    maximumFractionDigits: 2
  }).format(num)

export const formatDate = (data) =>
  new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(data))
