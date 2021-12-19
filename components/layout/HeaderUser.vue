<template>
  <v-menu offset-y>
    <template #activator="{ on, attrs }">
      <v-btn
        icon
        color="primary"
        v-bind="attrs"
        v-on="on"
      >
        K
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in userMenu"
        :key="index"
        @click="$router.push(item.route)"
      >
        <v-list-item-title> {{ item.name }} </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  computed: {
    userMenu() {
      return [
        {
          name: 'Выход',
          route: { name: 'auth' }
        }
      ]
    }
  }
}
</script>
