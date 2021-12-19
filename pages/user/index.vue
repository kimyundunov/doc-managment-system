<template>
  <div class="page--index">
    <v-container>
      <v-data-table
        :headers="headers"
        :items="items"
        class="pt-2"
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
    </v-container>
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
        },
        {
          text: 'Имя пользователя',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Роль',
          align: 'start',
          sortable: false,
          value: 'role',
        },
        {
          text: 'Дата регистрации',
          align: 'start',
          sortable: false,
          value: 'dateReg',
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
          dateReg: '17.09.2021',
          name: 'Воронцов А.В.',
          role: 'Исполнительный директор'
        },
        {
          id: 2,
          dateReg: '17.09.2021',
          name: 'Воронцов А.В.',
          role: 'Исполнительный директор'
        },
        {
          id: 3,
          dateReg: '17.09.2021',
          name: 'Воронцов А.В.',
          role: 'Исполнительный директор'
        }
      ]
    }
  }
}
</script>
