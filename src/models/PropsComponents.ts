/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dashboard } from './Dashboard'

export interface ItemsTotalizadores {
  value: number | string
  text: string
  info?: string
}

export interface TotalizadoresProps {
  items: Array<ItemsTotalizadores>
  loading: boolean
}

export interface AnaliseProdutoProps {
  loading?: boolean
  dashboard?: Dashboard
}

export interface ChartProps {
  options: any
  series: any
}

export interface ApexChartProps {
  options: any
  series: any
  type:
    | 'area'
    | 'line'
    | 'bar'
    | 'histogram'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'treemap'
    | 'boxPlot'
    | 'candlestick'
    | 'radar'
    | 'polarArea'
    | 'rangeBar'
    | undefined
  height: string
}
