<template>
  <header>
    <nav>
      <ul>
        <li v-for="route in routes" :key="route.name">
          <router-link
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

<style></style>
