<template>
  <section>
    <ul class="puzzle-list">
      <li v-for="puzzle in puzzles" :key="puzzle" class="puzzle-item">
        <router-link
          class="puzzle-link button"
          active-class="active"
          exact
          :to="`puzzles/${puzzle}`"
        >
          {{ puzzle }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  puzzles: number[] = [1, 2, 3];
}
</script>

<style lang="scss">
.puzzle-list {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 2em 1em;
  list-style-type: none;
}

.puzzle-item {
  margin: 0 0.5em;
}

.puzzle-link {
  padding: .5em 1em;
  min-width: 1.5em;

  color: $light-purple;
}
</style>
