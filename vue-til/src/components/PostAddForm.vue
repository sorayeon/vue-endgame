<template>
  <b-card>
    <b-card-title class="text-center">학습노트 생성</b-card-title>
    <b-card-body>
      <ValidationObserver v-slot="{ invalid }">
        <b-form @submit.prevent="submitForm">
          <b-form-group id="title-group" label="제목:" label-for="title">
            <ValidationProvider
              name="제목"
              rules="required|min:3|max:50"
              v-slot="{ errors }"
            >
              <b-form-input
                id="title"
                v-model="title"
                type="text"
                placeholder="Enter Title"
              ></b-form-input>
              <span class="errormessage">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <b-form-group id="contents-group" label="내용:" label-for="contents">
            <ValidationProvider
              name="내용"
              rules="required|min:3|max:350"
              v-slot="{ errors }"
            >
              <b-form-textarea
                id="contents"
                type="text"
                v-model="contents"
                placeholder="Enter contents"
                rows="3"
                max-rows="8"
              ></b-form-textarea>
              <span class="errormessage">{{ errors[0] }}</span>
            </ValidationProvider>
          </b-form-group>
          <b-button type="submit" variant="primary" v-bind:disabled="invalid">
            등록
          </b-button>
        </b-form>
      </ValidationObserver>
    </b-card-body>
  </b-card>
</template>

<script>
import { createPost } from '@/api/posts';
export default {
  name: 'PostAddForm',
  data() {
    return {
      title: '',
      contents: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        await createPost({
          title: this.title,
          contents: this.contents,
        });
        this.makeToast('학습노트가 생성되었습니다.', 'success');
        setTimeout(() => {
          this.$router.push('/main');
        }, 1000);
      } catch (error) {
        console.log(error.response.data.message);
        this.makeToast(error.response.data.message, 'danger');
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
