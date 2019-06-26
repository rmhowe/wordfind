<template>
  <header class="header">
    <div class="nav-icon-container">
      <a v-if="$route.path !== '/'" class="nav-icon" @click="$router.back()">
        <fa-icon icon="arrow-left"></fa-icon>
      </a>
    </div>
    <h1 class="title">WordFind</h1>
    <router-link
      class="nav-icon nav-icon-container"
      active-class="active"
      exact
      to="settings"
    >
      <fa-icon icon="cog"></fa-icon>
    </router-link>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-icon {
  font-size: 1.3em;
  color: $dark-purple;

  &:hover {
    color: $light-purple;
  }
}

.nav-icon-container {
  min-width: 2em;
}

.title {
  color: $dark-purple;
}
</style>
