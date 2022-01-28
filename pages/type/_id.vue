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
                    label="Название"
                  />
                </v-flex>
                <v-flex
                  xs12
                  px-2
                >
                  <v-textarea
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
          <v-divider vertical />
          <v-flex xs12 lg8 class="px-2 py-2">
            <iframe
              src="https://docs.google.com/gview?url=http://localhost:3000/api/KP_Yundunov.docx&embedded=true"
              frameborder="0"
              height="780px"
              width="100%"
            />
          </v-flex>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  asyncData({ route }) {
    return {
      edit: route.params.id !== 'add',
      form: {
        name: '',
        description: '',
        file: []
      }
    }
  },
  watch: {
    'form.file': {
      async handler(file) {
        if (file) {
          const formData = new FormData()
          formData.append("file", file)
          await this.$store.dispatch('uploadFile', formData)
        }
      }
    }
  }
}
</script>
