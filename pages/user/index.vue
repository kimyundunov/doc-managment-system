<template>
  <div class="page--index">
    <div class="mx-2 my-2">
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
        <template #item.roleId="{ value }">
          <span>{{ roleList.find(v => v.id === value).name }}</span>
        </template>
        <template #item.createdAt="{ value }">
          <span>{{ new Date(value) }}</span>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    const items = await store.dispatch('fetchUsers')
    const roleList = await store.dispatch('fetchRoles')
    return { items, roleList }
  },
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
          value: 'roleId',
        },
        {
          text: 'Дата регистрации',
          align: 'start',
          sortable: false,
          value: 'createdAt',
        }
      ],
      search: ''
    }
  },
  methods: {
    onClickRow({ id }) {
      this.$router.push({ name: 'user-id', params: { id } })
    }
  }
}
</script>
