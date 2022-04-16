<script setup lang="ts">
import { useTodosStore } from "@/stores/todo";
import { ref } from "vue";

const input = ref("");
const todosStore = useTodosStore();

const addTodo = () => {
  todosStore.addTodo(input.value);
  input.value = "";
};
</script>

<template>
  <section class="flex flex-col gap-4">
    <h2 class="font-bold text-xl">Create Todo</h2>

    <div class="flex gap-2 items-end">
      <div class="flex flex-col gap-1">
        <label for="newTodo" class="text-gray-400">New Todo</label>
        <input
          type="text"
          name="newTodo"
          id="newTodo"
          v-model="input"
          placeholder="New task"
          class="w-full px-2 py-1 min-w-[250px] bg-gray-500"
        />
      </div>

      <button @click="addTodo" class="bg-primary px-4 py-1 text-gray-100 uppercase font-medium">
        add
      </button>
    </div>
  </section>
</template>
