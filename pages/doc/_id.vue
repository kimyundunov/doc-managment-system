<template>
  <div class="page--doc">
    <v-card class="mx-2 my-2">
      <v-card-title>{{ edit ? `Документ № ${$route.params.id}` : 'Создать документ' }}</v-card-title>
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
                  <v-select
                    v-model="form.typeId"
                    label="Вид документа"
                    :items="typeList"
                    item-text="name"
                    item-value="id"
                  />
                </v-flex>
                <v-flex
                  xs12
                  px-2
                >
                  <v-select
                    v-model="form.executorId"
                    label="Исполнитель"
                    :items="userList"
                    item-text="name"
                    item-value="id"
                  />
                </v-flex>
                <v-flex
                  xs12
                  px-2
                >
                  <v-select
                    v-model="form.controllerId"
                    label="Контролер"
                    :items="userList"
                    item-text="name"
                    item-value="id"
                  />
                </v-flex>
                <v-flex
                  xs12
                  px-2
                >
                  <v-menu
                    v-model="showDateReg"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template #activator="{ on, attrs }">
                      <v-text-field
                        v-model="formDateRegFormatted"
                        label="Дата регистрации"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="form.dateReg"
                      no-title
                      locale="RU"
                      @input="showDateReg = false"
                    ></v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex
                  xs12
                  px-2
                >
                  <v-menu
                    v-model="showDateExecute"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template #activator="{ on, attrs }">
                      <v-text-field
                        v-model="formDateExecuteFormatted"
                        label="Дата завершения"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="form.dateDue"
                      no-title
                      locale="RU"
                      @input="showDateExecute = false"
                    ></v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex
                  xs12
                  px-2
                >
                  <v-file-input
                    v-model="form.file"
                    accept=".doc,.docx"
                    prepend-icon=""
                    placeholder="Выберите файл"
                  />
                </v-flex>
                <v-flex
                  xs12
                  px-2
                >
                  <v-btn v-if="form.url" text @click="uploadFile">
                    Скачать
                  </v-btn>
                </v-flex>
              </v-row>
            </v-form>
          </v-flex>
          <v-divider vertical />
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
import { formatDate } from '~/utils/helpers'

export default {
  async asyncData({ route, app, store }) {
    const typeList = await store.dispatch('fetchTypes')
    const userList = await store.dispatch('fetchUsers')
    const edit = route.params.id !== 'add'
    let form = {
      name: '',
      typeId: '',
      authorId: store.state.user.id,
      executorId: '',
      controllerId: '',
      dateReg: app.$moment().format('YYYY-MM-DD'),
      dateExecute: undefined,
      url: ''
    }

    if (edit) {
      form = await store.dispatch('fetchDoc', route.params.id)
    }

    return {
      edit,
      showDateReg: false,
      showDateExecute: false,
      form,
      typeList,
      userList
    }
  },
  computed: {
    formDateRegFormatted() {
      return formatDate(this.form.dateReg)
    },
    formDateExecuteFormatted() {
      return formatDate(this.form.dateDue)
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
      await this.$store.dispatch('updateDoc', this.form)
      this.$router.push({ name: 'doc' })
    },
    uploadFile() {
      const link = document.createElement('a')
      link.setAttribute('href', `http://89.108.76.104:3000${this.form.url}`)
      link.setAttribute('download', true)
      link.click()
      return false
    }
  }
}
</script>
