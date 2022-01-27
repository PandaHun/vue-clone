<template>
  <LNB />
  <TheHeader />
</template>

<script>
import LNB from '~/components/LeftNavigationBar'
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    LNB,
    TheHeader
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
