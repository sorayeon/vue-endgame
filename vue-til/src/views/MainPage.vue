<template>
  <section>
    <b-container class="bg-light pb-4">
      <PostList></PostList>
    </b-container>
  </section>
</template>

<script>
import PostList from '@/components/PostList';

export default {
  name: 'MainPage',
  components: {
    PostList,
  },
};
</script>

<style scoped></style>
