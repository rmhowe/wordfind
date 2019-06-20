import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app');
