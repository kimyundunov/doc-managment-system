<template>
  <div class="auth">
    <v-form>
      <v-card
        width="400"
        rounded
      >
        <v-card-title class="d-flex align-center">
          <span>Авторизация</span>
          <v-spacer></v-spacer>
          <v-icon>mdi-account</v-icon>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            label="Почта"
          />
          <v-text-field
            v-model="password"
            label="Пароль"
          />
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            large
            :loading="loading"
            @click="submit"
          >
            Войти
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.type"
    >
      {{ snackbar.message }}
      <template #action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar.show = false"
        >
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      errorMessage: '',
      snackbar: {
        show: false,
        type: undefined,
        message: ''
      }
    }
  },
  methods: {
    async submit() {
      this.loading = true

      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })

        this.$router.push('/')
      } catch (error) {
        this.snackbar = {
          type: 'error',
          message: error.response.data,
          show: true
        }
      }

      this.loading = false
    }
  }
}
</script>
