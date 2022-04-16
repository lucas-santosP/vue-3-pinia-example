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
  <div class="flex gap-2 items-end">
    <div class="flex flex-col gap-1">
      <label for="newTodo" class="text-gray-400">New Todo</label>
      <input
        type="text"
        name="newTodo"
        id="newTodo"
        v-model="input"
        placeholder="Add new todo task"
        class="w-full p-2 min-w-[250px] bg-gray-500"
      />
    </div>

    <button @click="addTodo" class="bg-primary px-4 py-2 text-gray-100 uppercase font-medium">
      add
    </button>
  </div>
</template>
