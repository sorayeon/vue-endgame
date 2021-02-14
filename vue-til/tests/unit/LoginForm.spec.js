import { mount } from '@vue/test-utils';
import Vue from 'vue';
import LoginForm from '@/components/LoginForm';

import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅되면 username 이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
    const wrapper = mount(LoginForm);
    expect(wrapper.vm.username).toBe('');
  });
  test('ID가 이메일 형식이 아니면 경고 메시지가 출력된다.', () => {
    const wrapper = mount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const idInput = wrapper.find('#username');
    console.log('인풋박스의 값', idInput.element.value);
    // console.log('이메일 검증 computed', wrapper.vm.isUsernameValid);
    const errormessage = wrapper.find('.errormessage');
    console.log(errormessage.html());
    expect(errormessage.exists()).toBeTruthy();
  });
  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다', () => {
    const wrapper = mount(LoginForm, {
      data() {
        return {
          username: 'test@test.com',
          password: '1234',
        };
      },
    });
    const button = wrapper.find('.btn');
    console.log(button.element.disabled);
    expect(button.element.disabled).toBeTruthy();
  });
});
