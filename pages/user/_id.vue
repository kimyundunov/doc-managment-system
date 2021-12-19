<template>
  <div class="page--doc">
    <v-container>
      <v-card-title>Создать пользователя</v-card-title>
      <v-card-text>
        <v-form>
          <v-row>
            <v-flex></v-flex>
          </v-row>
        </v-form>
      </v-card-text>
    </v-container>
  </div>
</template>

<script>
export default {
  asyncData({ route, app }) {
    return {
      edit: route.params.id !== 'add',
      form: {
        dateReg: app.$moment().format('YYYY-MM-DD'),
        dateExecute: undefined
      }
    }
  }
}
</script>
