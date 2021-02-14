<template>
  <b-card no-body class="overflow-hidden">
    <b-card-body :title="item.title">
      <b-card-text>
        {{ item.contents }}
      </b-card-text>
    </b-card-body>
    <b-card-footer class="text-right small">
      <span>
        {{ item.createdAt | formatDate }}
      </span>
      <span class="pl-1">
        <b-icon icon="pencil" font-scale="1" @click="routeEditPage"></b-icon>
      </span>
      <span class="pl-1">
        <b-icon
          v-b-modal="`modal_${item._id}`"
          icon="trash"
          font-scale="1"
        ></b-icon>
      </span>
      <b-modal :id="`modal_${item._id}`" @ok="deleteItem">
        {{ item.title }} 학습노트를 삭제 하시겠습니까?
      </b-modal>
    </b-card-footer>
  </b-card>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
  name: 'PostListItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      await deletePost(this.item._id);
      this.$emit('refresh');
      console.log('deleted');
    },
    routeEditPage() {
      this.$router.push(`/post/${this.item._id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-footer {
  padding: 0.75rem 0.55rem;
  span > svg {
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transform: scale(1.2);
      color: dodgerblue;
    }
  }
}
</style>
