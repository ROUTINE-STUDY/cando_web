<template>
  <footer class="container">
    <Logo/>
    <p class="copy">© {{ new Date().getFullYear() }} Cando</p>
  </footer>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    margin: 0;
    margin-bottom: 10px;
  }
  .copy {
    margin: 0;
    text-align: center;
  }
}
</style>