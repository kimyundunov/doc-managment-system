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
              </v-row>
            </v-form>
          </v-flex>
          <v-divider vertical />
          <v-flex xs12 lg8 class="px-2 py-2">
            <iframe
              src="https://docs.google.com/document/d/16LBUcTDRaXd2eob_wxKz12snml1xt1sZOCMH3F2-dis/edit"
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
