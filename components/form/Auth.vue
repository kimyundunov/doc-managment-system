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
          <v-btn color="primary" large>Войти</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
