<template>
  <header>
    <nav class="nav-bar">
      <ul class="nav-items">
        <li v-for="route in routes" :key="route.name" class="nav-item button">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="route.to"
          >
            {{ route.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  routes = [
    { label: 'Home', to: { name: 'home' } },
    { label: 'Puzzles', to: { name: 'puzzle', params: { id: 1 } } },
    { label: 'Settings', to: { name: 'settings' } }
  ]
}
</script>

<style>
.nav-bar {
  text-align: center;
}

.nav-items {
  list-style-type: none;
  margin: 0;
  padding: 1em;
}

.nav-item {
  display: inline-block;
  margin: 0 0.5em;
  padding: 0 1em;
}
</style>
