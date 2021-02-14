<template>
  <div>
    <h1 class="text-center p-3">Today I Learned</h1>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <b-card-group columns v-else>
      <PostListItem
        v-for="item in posts"
        :key="item._id"
        :item="item"
        @refresh="fetchNotes"
      ></PostListItem>
    </b-card-group>
    <div class="text-right pt-2" v-if="isLogin">
      <router-link to="/add">
        <b-iconstack font-scale="3">
          <b-icon stacked icon="circle-fill" variant="warning"></b-icon>
          <b-icon stacked icon="plus" scale="0.5" variant="white"></b-icon>
          <b-icon stacked icon="circle" variant="white"></b-icon>
        </b-iconstack>
      </router-link>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner';
import PostListItem from '@/components/PostListItem';
import { fetchPosts } from '@/api/posts';

export default {
  name: 'PostList',
  components: {
    LoadingSpinner,
    PostListItem,
  },
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    async fetchNotes() {
      this.isLoading = true;
      try {
        const { data } = await fetchPosts();
        this.isLoading = false;
        this.posts = data.posts;
      } catch (error) {
        console.log(error.response.data);
        this.isLoading = false;
        this.makeToast(error.response.data.message, 'danger');
      }
    },
    makeToast(message, variant = null) {
      this.$bvToast.toast(message, {
        variant: variant,
        toaster: 'b-toaster-top-center',
        solid: true,
      });
    },
  },
  created() {
    this.fetchNotes();
  },
};
</script>
