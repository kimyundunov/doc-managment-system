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
        <template #item.permissions="{ value }">
          <span>{{ value.join(', ') }}</span>
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
          text: 'Доступ',
          align: 'start',
          sortable: false,
          value: 'permissions',
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
          name: 'Полные права',
          permissions: ['Главная', 'Права пользователя', 'Документы']
        },
        {
          id: 2,
          name: 'Админ',
          permissions: ['Главная', 'Права пользователя', 'Документы']
        }
      ]
    }
  },
  methods: {
    onClickRow({ id }) {
      this.$router.push({ name: 'role-id', params: { id } })
    }
  }
}
</script>
