import { defineStore, } from 'pinia'

import colorsMap from './constants/colorsMap'

type TSeries = {
  name: string
  data: number[]
  stack: string
}

const series: TSeries[] = [
  {
    name: 'Norway',
    data: [ 148, 133, 124, ],
    stack: 'Europe',
  },
  {
    name: 'Germany',
    data: [ 102, 98, 65, ],
    stack: 'Europe',
  },
  {
    name: 'United States',
    data: [ 113, 122, 95, ],
    stack: 'North America',
  },
  {
    name: 'Canada',
    data: [ 77, 72, 80, ],
    stack: 'North America',
  },
]

const chartOptions = {
  colors: colorsMap,

  chart: {
    type: 'column',
  },

  title: {
    text: 'ЕФС',
  },

  xAxis: {
    categories: [ 'Gold', 'Silver', 'Bronze', ],
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: 'Count medals',
    },
  },

  tooltip: {
    formatter: function () {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access

      // eslint-disable-next-line @typescript-eslint/no-shadow, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
      const { x, y, series, point, }: any = this

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const name: unknown = series.name
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const stackTotal: unknown = point.stackTotal

      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const rezult = `<b>${x}</b><br/>${name}: ${y}<br/>Total: ${stackTotal}`

      return rezult
    },
  },

  plotOptions: {
    column: {
      stacking: 'normal',
    },
  },

  series,
}

export const useStoreGroupedColumnHighchart = defineStore(
  'store-grouped-column-highchart',
  {
    state: () => ({
      chartOptions,
    }),
    getters: {},
    actions: {},
  }
)
