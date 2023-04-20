/* eslint-disable no-undef */
import { defineStore, } from 'pinia'

import { Notify, } from 'quasar'

import { type IState, type TUser, } from 'src/types/auth'

const defaultCurrentUser: TUser = null

const storeAuth: IState = {
  email: '',
  password: '',
  loading: false,
  currentUser: defaultCurrentUser,
}

export const useStoreAuth = defineStore('auth', {
  state: () => storeAuth,
  getters: {
    loggedIn: ({ currentUser, }: IState) => true ?? currentUser !== null,
    currentEmail: ({ currentUser, }: IState) => currentUser?.email as string,
  },
  actions: {
    toggleLoading () {
      this.loading = !this.loading
    },
    onRegister () {
      this.toggleLoading()
    },
    onLogin () {
      this.toggleLoading()
    },
    getCurrentUser () {
      this.toggleLoading()
    },
    onResetForm () {
      this.email = ''
      this.password = ''
    },
    onLogout () {
      this.toggleLoading()
    },
    onForgot () {
      this.toggleLoading()
    },
    onPostLogout () {
      Notify.create({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Вы вышли из системы',
      })
      this.onResetForm()
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
