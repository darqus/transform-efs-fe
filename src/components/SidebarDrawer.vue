<template>
  <q-list>
    <q-item-label header>
      {{ t('titles.mainMenu') }}
    </q-item-label>

    <UserAvatar />

    <RouterMenuLink
      v-for="link in ROUTER_MENU_LINKS"
      :key="link.title"
      v-bind="link"
    />

    <div class="q-pa-md">
      <ThemeToggler />
    </div>
  </q-list>

  <div
    v-if="storeAuth.loggedIn"
    class="q-pa-md"
  >
    <q-btn
      label="Выйти"
      color="primary"
      outline
      size="md"
      no-caps
      :disable="storeAuth.loading"
      :loading="storeAuth.loading"
      @click="storeAuth.onLogout()"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, } from 'vue'
import { useI18n, } from 'vue-i18n'

import { useStoreAuth, } from 'stores/store-auth'

import RouterMenuLink from 'components/RouterMenuLink.vue'
import ThemeToggler from 'components/ThemeToggler.vue'
import UserAvatar from 'components/UserAvatar.vue'

const { t, } = useI18n()
const storeAuth = useStoreAuth()
const ROUTER_MENU_LINKS = computed(() => [
  {
    title: 'Главная',
    icon: 'home',
    path: '/',
    visible: storeAuth.loggedIn,
  },
  {
    title: 'Зарегистрироваться',
    icon: 'person_add',
    path: '/register',
    visible: !storeAuth.loggedIn,
  },
  {
    title: 'Войти',
    icon: 'login',
    path: '/login',
    visible: !storeAuth.loggedIn,
  },
  {
    title: 'Профиль',
    icon: 'account_circle',
    path: '/account',
    visible: storeAuth.loggedIn,
  },
  {
    title: 'Мониторинг',
    icon: 'schedule',
    path: '/monitoring',
    visible: storeAuth.loggedIn,
  },
])

storeAuth.getCurrentUser()
</script>
