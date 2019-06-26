<template>
  <div class="container">
    <div class="content">
      <Header></Header>
      <main role="main">
        <router-view></router-view>
      </main>
    </div>
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
.container {
  margin: 0;
  min-height: 100%;
  width: 100%;
  max-width: 40em;

  border-radius: .5em;
  background-color: #fff;
}

.content {
  padding: 1em 2em;
}
</style>
