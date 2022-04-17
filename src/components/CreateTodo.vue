<script setup lang="ts">
import { useTodosStore } from "@/stores/todo";
import { ref } from "vue";

const input = ref("");
const todosStore = useTodosStore();

const addTodo = () => {
  if (!input.value) return;

  todosStore.addTodo(input.value);
  input.value = "";
};
</script>

<template>
  <div class="w-full flex flex-col gap-1">
    <label for="newTodo" class="text-gray-400">New Todo</label>

    <form @submit.prevent="addTodo" class="flex gap-2">
      <input
        type="text"
        name="newTodo"
        id="newTodo"
        v-model="input"
        placeholder="Add new todo task"
        autocomplete="off"
        class="p-2 flex-1 w-full max-w-[350px] bg-gray-500"
      />

      <button type="submit" class="w-max bg-primary px-4 py-2 text-gray-100 uppercase font-medium">
        add
      </button>
    </form>
  </div>
</template>
