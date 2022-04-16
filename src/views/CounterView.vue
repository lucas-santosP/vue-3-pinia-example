<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import PageTitle from "../components/PageTitle.vue";

const counterStore = useCounterStore();
</script>

<template>
  <PageTitle>Counter</PageTitle>

  <div>
    <p>Count: {{ counterStore.counter }}</p>
    <p class="mb-4">Double Count: {{ counterStore.doubleCount }}</p>

    <button @click="counterStore.increment">Increment</button>
    <button @click="counterStore.decrement">Decrement</button>
  </div>
</template>

<style scoped>
button {
  margin-right: 1rem;
}
hr {
  margin: 2rem 0;
}
</style>
