<template>
  <div class="page--index">
    <v-container>
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
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Вид',
          align: 'start',
          sortable: false,
          value: 'type',
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
          value: 'author',
        },
        {
          text: 'Исполнитель',
          align: 'start',
          sortable: false,
          value: 'executor',
        },
        {
          text: 'Дата исполнения',
          align: 'start',
          sortable: false,
          value: 'dateDue',
        },
        {
          text: 'Файлы',
          align: 'start',
          sortable: false,
          value: 'files',
        },
        {
          text: 'Описание',
          align: 'start',
          sortable: false,
          value: 'description',
        },
        {
          text: 'Контролер',
          align: 'start',
          sortable: false,
          value: 'controller',
        }
      ],
      search: ''
    }
  },
  computed: {
    items() {
      return [
        {
          type: 5,
          id: 1,
          dateReg: '17.09.2021',
          name: 'Договор аренды имущества',
          author: 'Захаров П.Ф.',
          executor: 'Воронцов А.В.',
          dateDue: '23.10.2021',
          files: ['filename-1', 'filename-2'],
          description: 'Подписать договор аренды имущества',
          controller: 'Иванов И.А.'
        },
        {
          type: 5,
          id: 2,
          dateReg: '17.09.2021',
          name: 'Договор аренды имущества',
          author: 'Захаров П.Ф.',
          executor: 'Воронцов А.В.',
          dateDue: '23.10.2021',
          files: ['filename-1', 'filename-2'],
          description: 'Подписать договор аренды имущества',
          controller: 'Иванов И.А.'
        },
        {
          type: 5,
          id: 3,
          dateReg: '17.09.2021',
          name: 'Договор аренды имущества',
          author: 'Захаров П.Ф.',
          executor: 'Воронцов А.В.',
          dateDue: '23.10.2021',
          files: ['filename-1', 'filename-2'],
          description: 'Подписать договор аренды имущества',
          controller: 'Иванов И.А.'
        }
      ]
    }
  },
  methods: {
    onClickRow({ id }) {
      this.$router.push({ name: 'doc-id', params: { id } })
    }
  }
}
</script>
