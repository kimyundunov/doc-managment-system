<template>
  <header class="header">
    <v-toolbar dark class="px-8">
      <v-toolbar-title>
        <nuxt-link to="/" class="d-flex align-center">
          <v-icon>mdi-file-document</v-icon>
          <span class="ml-2">Doc managment</span>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <layout-header-user />
    </v-toolbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      authModal: false
    }
  },
  computed: {
    userMenu() {
      return [
        {
          name: 'ЛК',
          route: { name: 'user' }
        },
        {
          name: 'Выход',
          route: { name: 'auth' }
        }
      ]
    }
  }
}
</script>
