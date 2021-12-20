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
  asyncData({ route, store }) {
    return {
      edit: route.params.id !== 'add',
      form: {
        name: '',
        menu: store.state.menu.reduce((acc, value) => {
          acc[value.key] = true
          return acc
        }, {})
      }
    }
  },
  computed: {
    ...mapState({
      menu: state => state.menu
    })
  }
}
</script>
