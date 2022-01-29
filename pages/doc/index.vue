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
              @click="$router.push({ name: 'doc-id', params: { id: 'add' } })"
            >
              Создать
            </v-btn>
          </div>
        </template>
        <template #item.Type="{ value }">
          <span>{{ value.name }}</span>
        </template>
        <template #item.authorId="{ value }">
          <span>{{ userList.find(val => val.id === value).name }}</span>
        </template>
        <template #item.executorId="{ value }">
          <span>{{ userList.find(val => val.id === value).name }}</span>
        </template>
        <template #item.url="{ value }">
          <v-btn text x-small>Скачать</v-btn>
        </template>
        <template #item.controllerId="{ value }">
          <span>{{ userList.find(val => val.id === value).name }}</span>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    const userList = await store.dispatch('fetchUsers')
    const items = await store.dispatch('fetchDocs')
    return { items, userList }
  },
  data() {
    return {
      headers: [
        {
          text: 'Вид',
          align: 'start',
          sortable: false,
          value: 'Type',
        },
        {
          text: '№',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        {
          text: 'Дата рег.',
          align: 'start',
          sortable: false,
          value: 'dateReg',
        },
        {
          text: 'Название',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Автор',
          align: 'start',
          sortable: false,
          value: 'authorId',
        },
        {
          text: 'Исполнитель',
          align: 'start',
          sortable: false,
          value: 'executorId',
        },
        {
          text: 'Дата исполнения',
          align: 'start',
          sortable: false,
          value: 'dateDue',
        },
        {
          text: 'Файл',
          align: 'start',
          sortable: false,
          value: 'url',
        },
        {
          text: 'Контролер',
          align: 'start',
          sortable: false,
          value: 'controllerId',
        }
      ],
      search: ''
    }
  },
  methods: {
    onClickRow({ id }) {
      this.$router.push({ name: 'doc-id', params: { id } })
    }
  }
}
</script>
