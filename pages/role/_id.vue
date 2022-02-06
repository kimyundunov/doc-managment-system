<template>
  <div class="page--doc">
    <v-container>
      <v-card>
        <v-card-title>{{ edit ? 'Редактировать' : 'Создать' }} права</v-card-title>
        <v-card-text class="px-6">
          <v-form>
            <v-row>
              <v-flex
                xs12
                px-2
              >
                <v-text-field
                  v-model="form.name"
                  label="Название"
                />
              </v-flex>
              <v-flex
                v-for="item in menu"
                :key="item.key"
                xs6
                md4
                lg3
                px-2
              >
                <v-checkbox
                  v-model="form.menu[item.key]"
                  :label="item.name"
                />
              </v-flex>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
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
import { mapState } from 'vuex'

export default {
  async asyncData({ route, store }) {
    const edit = route.params.id !== 'add'
    let form = {
      name: '',
      menu: store.state.menu.reduce((acc, value) => {
        acc[value.key] = true
        return acc
      }, {})
    }

    if (edit) {
      const role = await store.dispatch('fetchRole', route.params.id)
      form = {
        id: role.id,
        name: role.name,
        menu: role.menu ? JSON.parse(role.menu) : {}
      }
    }

    return {
      edit,
      form
    }
  },
  computed: {
    ...mapState({
      menu: state => state.menu
    })
  },
  methods: {
    async submit() {
      const payload = {
        id: this.edit ? this.$route.params.id : undefined,
        name: this.form.name,
        menu: JSON.stringify(this.form.menu)
      }

      await this.$store.dispatch('updateRole', payload)

      this.$router.push({ name: 'role' })
    }
  }
}
</script>
