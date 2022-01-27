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
          <v-text-field
            v-model="search"
            label="Поиск"
            class="mx-3"
            outlined
            hide-details
          ></v-text-field>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    const items = await store.dispatch('fetchStatuses')
    return { items }
  },
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
          value: 'description',
        }
      ],
      search: ''
    }
  },
  methods: {
    onClickRow({ id }) {
      this.$router.push({ name: 'status-id', params: { id } })
    }
  }
}
</script>
