<template>
  <v-navigation-drawer
    permanent
    expand-on-hover
  >
    <v-list
      nav
      dense
    >
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        link
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      menu: state => state.menu
    })
  }
}
</script>
