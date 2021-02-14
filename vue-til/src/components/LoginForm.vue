<template>
  <b-card>
    <b-card-title class="text-center">로그인 페이지</b-card-title>
    <b-card-body>
      <ValidationObserver v-slot="{ invalid }">
        <b-form @submit.prevent="submitForm">
          <b-form-group
            id="username-group"
            label="이메일:"
            label-for="username"
          >
            <ValidationProvider
              name="이메일"
              rules="required|email"
              v-slot="{ errors }"
            >
              <b-form-input
                id="username"
                v-model="username"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
              <span class="errormessage">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <b-form-group
            id="password-group"
            label="비밀번호:"
            label-for="password"
          >
            <ValidationProvider
              name="비밀번호"
              rules="required|min:3|max:12"
              v-slot="{ errors }"
            >
              <b-form-input
                id="password"
                type="password"
                v-model="password"
                placeholder="Enter password"
                required
              ></b-form-input>
              <span class="errormessage">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <b-button type="submit" variant="primary" v-bind:disabled="invalid">
            로그인
          </b-button>
        </b-form>
      </ValidationObserver>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async submitForm(event) {
      event.preventDefault();
      const userData = {
        username: this.username,
        password: this.password,
      };
      try {
        const data = await this.$store.dispatch('LOGIN', userData);
        console.log(data);
        this.makeToast(`${data.user.nickname}님 환영합니다.`, 'success');
        setTimeout(() => {
          this.$router.push('/main');
        }, 1000);
      } catch (error) {
        console.log(error.response.data);
        this.makeToast(error.response.data, 'danger');
      }
    },
    makeToast(message, variant = null) {
      this.$bvToast.toast(message, {
        title: '알려드립니다',
        variant,
        autoHideDelay: 500,
        toaster: 'b-toaster-top-center',
        solid: false,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-top: 20px;
}
.errormessage {
  font-size: 12px;
  color: crimson;
}
</style>
