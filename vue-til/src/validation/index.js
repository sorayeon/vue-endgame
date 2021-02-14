import Vue from 'vue';
import {
  validate,
  localize,
  ValidationProvider,
  ValidationObserver,
  extend,
} from 'vee-validate';
import ko from 'vee-validate/dist/locale/ko.json';
import { required, email, min, max } from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('email', email);
extend('required', required);
extend('min', min);
extend('max', max);

localize('ko', ko);

export default validate;
