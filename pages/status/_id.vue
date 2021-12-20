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
                  label="Название"
                />
              </v-flex>
              <v-flex
                xs12
                px-2
              >
                <v-textarea
                  label="Название"
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
  asyncData({ route }) {
    return {
      edit: route.params.id !== 'add',
      form: {}
    }
  }
}
</script>
