<script setup lang="ts">
import CreateTodo from "@/components/CreateTodo.vue";
import TodoList from "../components/TodoList.vue";
import TodoFilter from "../components/TodoFilter.vue";
import PageTitle from "../components/PageTitle.vue";
</script>

<template>
  <PageTitle>Todo</PageTitle>

  <div class="flex flex-col">
    <div class="flex gap-16 justify-between">
      <CreateTodo />
      <TodoFilter />
    </div>

    <hr class="w-full my-8 border-gray-300" />

    <TodoList />
  </div>
</template>
