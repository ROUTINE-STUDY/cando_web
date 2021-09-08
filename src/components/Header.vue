<template>
  <header>
    <Logo/>
    <div v-if="false" class="nav nav-pills">
      <div v-for="nav in memberNavigations" :key="nav.name" class="nav-item">
        <RouterLink :to="nav.href" active-class="active" class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div v-else class="nav nav-pills">
      <div class="nav-item">
        <RouterLink :to="navigations.href" active-class="active" class="nav-link">
          {{ navigations.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo';

export default {
  components: {
    Logo
  },
  data() {
    return {
      memberNavigations: [
        {
          name: 'DiaryList',
          href: '/diary/list'
        },
        {
          name: 'DiaryPost',
          href: '/diary/post'
        },
        {
          name: 'About',
          href: '/about'
        }
      ],
      navigations: { name: 'About', href: '/about' }
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo {
    margin-right: 40px;
  }
  @include media-breakpoint-down(sm) {
    padding: 0 10px;
    justify-content: space-between;
    .logo {
      margin-right: 0;
    }
  }
}
</style>