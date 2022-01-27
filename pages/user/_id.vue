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
                  v-model="form.name"
                  label="Имя пользователя"
                />
              </v-flex>
              <v-flex
                xs12
                md6
                px-2
              >
                <v-text-field
                  v-model="form.email"
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
                  v-model="form.roleId"
                  label="Роль"
                  :items="roleList"
                  item-text="name"
                  item-value="id"
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
            @click="submit"
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
  async asyncData({ route, store }) {
    const edit = route.params.id !== 'add'
    const roleList = await store.dispatch('fetchRoles')
    let form = {
      password: '',
      name: '',
      email: '',
      roleId: undefined
    }

    if (edit) {
      form = await store.dispatch('fetchUser', route.params.id)
    }

    return {
      edit,
      form,
      roleList
    }
  },
  methods: {
    generatePassword() {
      this.form.password = generator.generate({
        length: 16,
        numbers: true
      })
    },
    async submit() {
      await this.$store.dispatch('updateUser', this.form)
      this.$router.push({ name: 'user' })
    }
  }
}
</script>
