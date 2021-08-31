<template>
  <Header />
  <RouterView />
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>
