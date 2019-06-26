<template>
  <header class="header">
    <a>
      <fa-icon icon="arrow-left" class="nav-icon" @click="$router.go(-1)"></fa-icon>
    </a>
    <h1 class="title">WordFind</h1>
    <router-link
      active-class="active"
      exact
      to="settings"
    >
      <fa-icon icon="cog" class="nav-icon"></fa-icon>
    </router-link>
  </header>
</template>

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

.title {
  color: $dark-purple;
}
</style>
