<template>
  <header class="header">
    <v-toolbar dark>
      <v-toolbar-title>
        <nuxt-link to="/" class="d-flex align-center">
          <v-icon>mdi-file-document</v-icon>
          <span class="ml-2">Doc managment</span>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-dialog
        v-model="authModal"
        width="400"
      >
        <template #activator="{ on, attrs }">
          <v-btn
            large
            class="mr-2"
            v-bind="attrs"
            color="primary"
            v-on="on"
          >
            Войти
          </v-btn>
        </template>

        <form-auth />
      </v-dialog>
      <v-btn large color="primary">Зарегистрироваться</v-btn>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      authModal: false
    }
  }
}
</script>
