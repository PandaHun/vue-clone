<template>
  <LNB />
  <RNB />
  <TheHeader />
</template>

<script>
import LNB from '~/components/LeftNavigationBar'
import RNB from '~/components/RightNavigationBar'
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    LNB,
    RNB,
    TheHeader
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
