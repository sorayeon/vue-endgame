<template>
  <b-container>
    <LoginForm></LoginForm>
  </b-container>
</template>

<script>
import LoginForm from '@/components/LoginForm';
export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
};
</script>
