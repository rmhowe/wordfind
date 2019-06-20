import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'normalize.css';
import './styles.scss';

new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app');
