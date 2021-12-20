<template>
  <div class="page--doc">
    <v-container>
      <v-card>
        <v-card-title>{{ edit ? 'Редактировать' : 'Создать' }} пользователя</v-card-title>
        <v-card-text class="px-6">
          <v-form>
            <v-row>
              <v-flex
                xs12
                md6
                px-2
              >
                <v-text-field
                  label="Имя пользователя"
                />
              </v-flex>
              <v-flex
                xs12
                md6
                px-2
              >
                <v-text-field
                  label="Email"
                  type="email"
                />
              </v-flex>
              <v-flex
                xs12
                md6
                px-2
              >
                <v-text-field
                  v-model="form.password"
                  label="Пароль"
                />
              </v-flex>
              <v-flex
                xs12
                md6
                px-2
              >
                <v-select
                  label="Роль"
                />
              </v-flex>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            large
            @click="generatePassword"
          >
            Сгенерировать пароль
          </v-btn>
          <v-btn
            color="primary"
            large
          >
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import generator from 'generate-password'

export default {
  asyncData({ route }) {
    return {
      edit: route.params.id !== 'add',
      form: {
        password: ''
      }
    }
  },
  methods: {
    generatePassword() {
      this.form.password = generator.generate({
        length: 16,
        numbers: true
      })
    }
  }
}
</script>
