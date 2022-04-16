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
  <section class="flex flex-col gap-4">
    <h2 class="font-semibold text-xl">Create Todo</h2>

    <div class="flex gap-2 items-end">
      <div class="flex flex-col gap-1">
        <label for="filterTodo" class="text-gray-400">Filter</label>

        <select
          name="filterTodo"
          id="filterTodo"
          class="w-full px-2 py-1 min-w-[250px] bg-gray-500 capitalize"
          :value="filter"
          @change="filterTodos"
        >
          <option v-for="options in FILTER_OPTIONS" :value="options" class="capitalize">
            {{ options }}
          </option>
        </select>
      </div>
    </div>
  </section>
</template>
