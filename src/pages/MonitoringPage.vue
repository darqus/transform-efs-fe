<template>
  <q-page class="row items-center justify-evenly">
    <q-select
      v-model="currentMonitoringItem"
      :options="monitoringList"
      label="Точки мониторинга по шагам процессов ЕФС"
      style="width: 300px"
    />
  </q-page>
</template>

<script setup lang="ts">
import { ref, } from 'vue'

const monitoringList = [
  'ЕФС-1',
  'СЗВ-БЮДЖ-ЕФС',
  'ДСВ-3',
  'СЗВ-СТАЖ-ЕФС',
  'СЗВ-ТД-ЕФС',
  'СЗИ-ФСС',
  'ОДВ-1-ЕФС',
]
const currentMonitoringItem = ref(monitoringList[0])
</script>
