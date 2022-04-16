<script setup lang="ts">
import { useTodosStore, type ITodoItem } from "@/stores/todo";

const todosStore = useTodosStore();
</script>

<template>
  <div>
    <h2 class="font-semibold text-xl">Todos List</h2>

    <ul class="flex flex-col gap-4 py-4">
      <li
        v-for="todo in todosStore.filteredTodos"
        class="flex flex-col border border-gray-400 p-2 rounded-md w-[250px]"
      >
        <p>Id: {{ todo.id }}</p>
        <p>Text: {{ todo.text }}</p>
        <div class="flex items-center gap-2">
          <label>Is finished ?</label>
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
