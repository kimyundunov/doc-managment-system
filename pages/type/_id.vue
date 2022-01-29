<template>
  <div class="page--doc">
    <v-card class="mx-2 my-2">
      <v-card-title>{{ edit ? `Редактировать вид № ${$route.params.id}` : 'Создать вид документа' }}</v-card-title>
      <v-card-text class="px-5">
        <v-row>
          <v-flex xs12 lg4 class="px-2 py-2">
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
                <v-flex
                  xs12
                  px-2
                >
                  <v-file-input
                    v-model="form.file"
                    accept=".doc,.docx"
                  />
                </v-flex>
              </v-row>
            </v-form>
          </v-flex>
          <v-divider vertical inset />
          <v-flex xs12 lg8 class="px-2 py-2">
            <iframe
              v-if="form.url"
              :src="`https://docs.google.com/gview?url=http://89.108.76.104:3000${form.url}&embedded=true`"
              frameborder="0"
              height="780px"
              width="100%"
            />
          </v-flex>
        </v-row>
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
  </div>
</template>

<script>
export default {
  async asyncData({ route, store }) {
    const edit = route.params.id !== 'add'
    let form = {
      name: '',
      description: '',
      url: ''
    }

    if (edit) {
      form = await store.dispatch('fetchType', route.params.id)
    }

    return {
      edit,
      form
    }
  },
  watch: {
    'form.file': {
      async handler(file) {
        if (file) {
          const formData = new FormData()
          formData.append("file", file)
          const url = await this.$store.dispatch('uploadFile', formData)
          this.form.url = url
        }
      }
    }
  },
  methods: {
    async submit() {
      await this.$store.dispatch('updateType', this.form)
      this.$router.push({ name: 'type' })
    }
  }
}
</script>
