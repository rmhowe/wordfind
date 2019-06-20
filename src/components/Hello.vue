<template>
  <div class="hello">Hello {{ message }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Hello extends Vue {
  @Prop() message!: string;
}
</script>

<style>
.hello {
  font-size: 20px;
}
</style>
