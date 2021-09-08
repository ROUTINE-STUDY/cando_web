<template>
  <div class="container">
    <h1>Cando</h1>
    <p>매일 반복되는 일상에서 나만의 일상을 적어보는 Cando 일기장</p>
    <p>소소하게 적었던 일기들이 추억이 되는 순간</p>
    <div class="nav nav-pills">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <RouterLink :to="nav.href" class="nav-link active">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        {
          name: 'Login',
          href: '/login'
        },
        {
          name: 'Register',
          href: '/register'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - #{$logoHeight} - #{$footerHeight});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .nav {
    .nav-item {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>