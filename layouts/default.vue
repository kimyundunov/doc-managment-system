<template>
  <v-app dark>
    <layout-header />
    <div class="d-flex" style="height: 100%">
      <layout-header-navigation />
      <nuxt style="width: 100%" />
    </div>
  </v-app>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if (!store.state.user) {
      redirect('/auth')
    }
  },
  data () {
    return {}
  }
}
</script>
