<script setup lang="ts">
import { useTodosStore } from "@/stores/todo";

const todosStore = useTodosStore();
</script>

<template>
  <div>
    <h2 class="font-semibold text-xl">Todos List</h2>

    <ul class="flex gap-y-8 gap-x-5 py-4 flex-wrap">
      <li
        v-for="todo in todosStore.filteredTodos"
        class="relative flex flex-col bg-gray-700 shadow shadow-primary border-primary/80 p-4 rounded-md w-[250px]"
      >
        <button
          class="absolute -top-4 -right-3 flex text-sm justify-center items-center w-8 h-8 p-2 rounded-full bg-primary hover:brightness-110 transition-all"
          @click="todosStore.removeItem(todo.id)"
        >
          X
        </button>

        <p>Text: {{ todo.text }}</p>
        <div class="flex items-center gap-2">
          <label>Finished:</label>
          <input
            type="checkbox"
            name="isFinished"
            id="isFinished"
            :checked="todo.isFinished"
            @change="todosStore.toggleItemStatus(todo.id)"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
