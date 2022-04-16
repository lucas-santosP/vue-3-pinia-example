<script setup lang="ts">
import { useTodosStore, isTodoFilter, FILTER_OPTIONS } from "@/stores/todo";
import { storeToRefs } from "pinia";

const todosStore = useTodosStore();
const { filteredTodos, filter } = storeToRefs(todosStore);

function filterTodos(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  isTodoFilter(value) && todosStore.setFilter(value);
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <label for="filterTodo" class="text-gray-400">Filter</label>

    <select
      name="filterTodo"
      id="filterTodo"
      class="w-full p-2 min-w-[160px] bg-gray-500 capitalize"
      :value="filter"
      @change="filterTodos"
    >
      <option v-for="options in FILTER_OPTIONS" :value="options" class="capitalize">
        {{ options }}
      </option>
    </select>
  </div>
</template>
