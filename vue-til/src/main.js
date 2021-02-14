import Vue from 'vue';
import App from './App.vue';
import router from '@/routes';
import store from '@/store';
import validate from '@/validation';
import { formatDate } from '@/utils/filters';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.filter('formatDate', formatDate);

new Vue({
  render: h => h(App),
  router,
  validate,
  store,
}).$mount('#app');
