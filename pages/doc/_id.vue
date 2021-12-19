<template>
  <div class="page--doc">
    <v-card class="mx-2 my-2">
      <v-card-title>{{ edit ? `Документ № ${$route.params.id}` : 'Создать документ' }}</v-card-title>
      <v-card-text class="px-5">
        <v-row>
          <v-flex xs12 lg6 class="px-2 py-2">
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
                  <v-select
                    label="Вид документа"
                  />
                </v-flex>
                <v-flex
                  xs12
                  px-2
                >
                  <v-select
                    label="Исполнитель"
                  />
                </v-flex>
                <v-flex
                  xs12
                  px-2
                >
                  <v-select
                    label="Контролер"
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
                        label="Дата регистрации"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="form.dateExecute"
                      no-title
                      locale="RU"
                      @input="showDateExecute = false"
                    ></v-date-picker>
                  </v-menu>
                </v-flex>
              </v-row>
            </v-form>
          </v-flex>
          <v-divider vertical />
          <v-flex xs12 lg6 class="px-2 py-2">
            <v-tabs
              fixed-tabs
              dark
            >
              <v-tab>
                file1
              </v-tab>
              <v-tab>file1</v-tab>
            </v-tabs>
            <iframe
              src="https://docs.google.com/document/d/16LBUcTDRaXd2eob_wxKz12snml1xt1sZOCMH3F2-dis/edit"
              frameborder="0"
              height="730px"
              width="100%"
              class="mt-2"
            />
          </v-flex>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { formatDate } from '~/utils/helpers'

export default {
  asyncData({ route, app }) {
    return {
      edit: route.params.id !== 'add',
      showDateReg: false,
      showDateExecute: false,
      form: {
        dateReg: app.$moment().format('YYYY-MM-DD'),
        dateExecute: undefined
      },
      file: 'https://docs.google.com/document/d/16LBUcTDRaXd2eob_wxKz12snml1xt1sZOCMH3F2-dis/edit'
    }
  },
  computed: {
    formDateRegFormatted() {
      return formatDate(this.form.dateReg)
    },
    formDateExecuteFormatted() {
      return formatDate(this.form.dateExecute)
    }
  },
  watch: {
    file(v) {
      console.log(v)
    }
  }
}
</script>
