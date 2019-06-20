<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Header from './components/Header.vue';

@Component({
  components: { Header }
})
export default class App extends Vue {}
</script>

<style>
html, body {
  height: 100%;

  text-align: center;
  background-color: rgb(235, 245, 252);
}

.container {
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 40em;

  border-radius: .5em;
  background-color: #fff;
}
</style>
