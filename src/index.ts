import Vue from 'vue';
import HelloComponent from './components/Hello.vue';

new Vue({
  el: "#app",
  components: {
    HelloComponent
  },
  data: { message: 'this is doge' },
  template: `
  <div>
    <hello-component :message="message" />
    Message: <input v-model="message" type="text">
  </div>
  `
});
