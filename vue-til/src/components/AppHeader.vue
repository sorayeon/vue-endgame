<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="warning">
      <b-navbar-brand>
        <router-link :to="logoLink">
          <img src="@/assets/logo.png" alt="logo" />
        </router-link>
        <span v-if="isLogin">{{ $store.state.username }}</span>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <template v-if="!isLogin">
          <b-nav-item to="/login" right>
            로그인
          </b-nav-item>
          <b-nav-item to="/signup" right>
            회원가입
          </b-nav-item>
        </template>
        <template v-else>
          <b-nav-item @click="logoutUser" right>
            로그아웃
          </b-nav-item>
        </template>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUserInfo');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped lang="scss">
.navbar-brand {
  font-size: 16px;
  img {
    width: 30px;
  }
  span {
    padding-left: 10px;
    line-height: 30px;
  }
}
.navbar-nav {
  display: flex;
  flex-direction: row;
  .nav-item {
    padding-left: 10px;
    box-sizing: border-box;
    .nav-link {
      color: #fff !important;
    }
    .nav-link:hover {
      text-decoration: underline !important;
    }
    .router-link-exact-active {
      color: #fff !important;
      text-decoration: underline !important;
    }
  }
}
</style>
