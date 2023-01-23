import { Dashboard } from '../../models/Dashboard'
import { formatCurrency } from './format'

const months = {
  1: 'Jan',
  2: 'Fev',
  3: 'Mar',
  4: 'Abr',
  5: 'Mai',
  6: 'Jun',
  7: 'Jul',
  8: 'Ago',
  9: 'Set',
  10: 'Out',
  11: 'Nov',
  12: 'Dez'
}

export const generateProdutoTipoChart = (data: Dashboard) => {
  const grafico_produtos = [...data.grafico_produtos]
  const categories = grafico_produtos.splice(grafico_produtos.length - 1)

  return {
    series: grafico_produtos,
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10
        }
      },
      yaxis: {
        labels: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          formatter: function (value: any) {
            return formatCurrency(value)
          }
        }
      },
      xaxis: {
        type: 'string',
        categories,
        labels: {
          formatter: function (value: string) {
            return `${months[Number(value.split('-')[1])]}/${value
              .split('-')[0]
              .substring(2)}`
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    }
  }
}
