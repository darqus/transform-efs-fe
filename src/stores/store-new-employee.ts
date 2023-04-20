import { defineStore, } from 'pinia'

import { Notify, } from 'quasar'

import {
  ELevelsNames,
  type TLevelNames,
  type IEmployeeCard,
} from 'src/types/emloyee-card'

const defaultLevel: TLevelNames = ELevelsNames[0]

const employeeCard: IEmployeeCard = {
  id: '',
  name: '',
  email: '',
  position: '',
  level: defaultLevel,
  description: '',
}

export const useStoreNewEmployee = defineStore('new-employee', {
  state: () => ({
    ...employeeCard,
    loading: false,
  }),
  actions: {
    toggleLoading () {
      this.loading = !this.loading
    },
    // add() {},
    onReset () {
      this.id = ''
      this.name = ''
      this.email = ''
      this.position = ''
      this.level = defaultLevel
      this.description = ''
    },
    createErrorMessage (error: NodeJS.ErrnoException) {
      Notify.create({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: error?.code,
      })
    },
  },
})
