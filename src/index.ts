import 'normalize.css';
import './styles/styles.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './components/Icon.ts';

new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app');
