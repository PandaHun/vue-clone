<template>
  <LNB />
  <RNB />
  <TheHeader />
  <Billboard />
</template>

<script>
import LNB from '~/components/LeftNavigationBar'
import RNB from '~/components/RightNavigationBar'
import TheHeader from '~/components/TheHeader'
import Billboard from '~/components/Billboard'

export default {
  components: {
    LNB,
    RNB,
    TheHeader,
    Billboard
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
