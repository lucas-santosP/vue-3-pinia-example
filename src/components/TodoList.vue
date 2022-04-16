<script setup lang="ts">
import { useTodosStore } from "@/stores/todo";

const todosStore = useTodosStore();

function formatDate(date: string) {
  return new Date(date).toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
</script>

<template>
  <div>
    <h2 class="font-semibold text-xl">Todos List</h2>

    <ul class="flex gap-y-8 gap-x-5 py-4 flex-wrap">
      <li
        v-for="todo in todosStore.filteredTodos"
        class="relative w-[300px] flex flex-col bg-gray-700 shadow hover:bg-gray-600/80 shadow-primary border-primary/80 p-4 rounded-md transition-all"
      >
        <p class="truncate mb-2" :title="todo.text">Text: {{ todo.text }}</p>

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

        <hr class="my-3 mx-0 border-gray-500" />
        <p class="mt text-gray-400">Created At: {{ formatDate(todo.createdAt) }}</p>

        <button
          class="absolute -top-4 -right-3 flex text-sm justify-center items-center w-8 h-8 p-2 rounded-full bg-primary hover:brightness-110 transition-all"
          @click="todosStore.removeItem(todo.id)"
        >
          X
        </button>
      </li>

      <template v-if="!todosStore.todos.length">
        <p class="text-gray-400">Ops! No tasks yet.</p>
      </template>
    </ul>
  </div>
</template>
