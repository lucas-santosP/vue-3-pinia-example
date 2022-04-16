<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";
import PageTitle from "../components/PageTitle.vue";

const input = ref("");
const counterStore = useCounterStore();

function clearForm() {
  input.value = "";
}
</script>

<template>
  <PageTitle>Counter</PageTitle>

  <div>
    <p>Count: {{ counterStore.counter }}</p>
    <p>Double Count: {{ counterStore.doubleCount }}</p>

    <button @click="counterStore.increment">Incrment</button>
    <button @click="counterStore.decrement">Decrement</button>

    <hr />

    <input type="text" v-model="input" />

    <button @click="clearForm(input)">Clear input</button>
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
