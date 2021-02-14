<template>
  <div>
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
  &:hover {
    color: #42b883;
    text-decoration: underline;
  }
}
a.router-link-exact-active {
  text-decoration: underline;
}
</style>
