<template>
  <div class="page--index">
    <div  class="mx-2 my-2">
      <v-data-table
        :headers="headers"
        :items="items"
        class="pt-2"
        @click:row="onClickRow"
      >
        <template #top>
          <div class="d-flex">
            <v-text-field
              v-model="search"
              label="Поиск"
              class="mx-3"
              outlined
              hide-details
            ></v-text-field>
            <v-btn
              x-large
              color="primary"
              @click="$router.push({ name: 'type-id', params: { id: 'add' } })"
            >
              Создать
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
          width: '10%'
        },
        {
          text: 'Название',
          align: 'start',
          sortable: false,
          value: 'name',
          width: '15%'
        },
        {
          text: 'Описание',
          align: 'start',
          sortable: false,
          value: 'description'
        }
      ],
      search: ''
    }
  },
  computed: {
    items() {
      return [
        {
          id: 1,
          name: 'Официальная запись',
          description: 'Документ, посредством которого осуществляется деловая переписка между заинтересованными сторонами по различным вопросам'
        },
        {
          id: 2,
          name: 'Служебная запись',
          description: 'Записка о выполнении какой-либо работы, направляемая одним должностным лицом другому'
        },
        {
          id: 3,
          name: 'Докладная',
          description: 'Документ направленный руководству или вышестоящему должностному лицу для административного рассмотрения'
        }
      ]
    }
  },
  methods: {
    onClickRow({ id }) {
      this.$router.push({ name: 'type-id', params: { id } })
    }
  }
}
</script>
