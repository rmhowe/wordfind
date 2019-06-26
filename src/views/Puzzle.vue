<template>
  <h3>Puzzle {{ id }}</h3>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: { id: String }
})
export default class Puzzle extends Vue {}
</script>

<style></style>
