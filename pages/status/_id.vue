<template>
  <div class="page--doc">
    <v-container>
      <v-card>
        <v-card-title>{{ edit ? 'Редактировать' : 'Создать' }} статус</v-card-title>
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
                xs12
                px-2
              >
                <v-textarea
                  v-model="form.description"
                  label="Описание"
                  outlined
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
export default {
  async asyncData({ route, store }) {
    const edit = route.params.id !== 'add'
    let form = {
      name: '',
      description: ''
    }

    if (edit) {
      form = await store.dispatch('fetchStatus', route.params.id)
    }

    return {
      edit,
      form
    }
  },
  methods: {
    async submit() {
      await this.$store.dispatch('updateStatus', this.form)
      this.$router.push({ name: 'status' })
    }
  }
}
</script>
