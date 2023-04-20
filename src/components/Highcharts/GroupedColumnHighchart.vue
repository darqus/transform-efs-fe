<template>
  <charts
    ref="chart"
    class="highcharts"
    :options="chartOptions"
  />
</template>

<script setup>
import { useStoreGroupedColumnHighchart, } from 'stores/store-grouped-column-highchart'

import * as Highcharts from 'highcharts'
import * as ExportAccessibility from 'highcharts/modules/accessibility'
import * as ExportData from 'highcharts/modules/export-data'
import * as Exporting from 'highcharts/modules/exporting'

Exporting(Highcharts)
ExportData(Highcharts)
ExportAccessibility(Highcharts)

const storeGroupedColumnHighchart = useStoreGroupedColumnHighchart()

const chartOptions = storeGroupedColumnHighchart.chartOptions
</script>

<style lang="scss">
@import "./scss/highcharts";
</style>
