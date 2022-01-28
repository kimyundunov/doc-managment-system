<template>
  <v-menu offset-y>
    <template #activator="{ on, attrs }">
      <v-btn
        fab
        small
        color="primary"
        v-bind="attrs"
        v-on="on"
      >
        {{ user && user.name ? user.name[0] : 'U' }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item @click="logout">
        <v-list-item-title> Выход </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    logout() {
      this.$store.commit('SET_USER', undefined)
      this.$router.push('/auth')
    }
  }
}
</script>
