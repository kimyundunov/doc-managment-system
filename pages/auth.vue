<template>
  <div class="page--auth auth">
    <v-container class="auth__container">
      <v-row justify="center">
        <FormAuth />
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'auth'
}
</script>

<style lang="scss">
.auth {
  &__container {
    display: flex;
    align-items: center;
    height: 100vh;
  }
}
</style>
