<script setup lang="ts">
import CreateTodo from "@/components/CreateTodo.vue";
import TodoList from "../components/TodoList.vue";
import TodoFilter from "../components/TodoFilter.vue";
import PageTitle from "../components/PageTitle.vue";
</script>

<template>
  <PageTitle>Todo</PageTitle>

  <div class="flex gap-16">
    <div>
      <CreateTodo />
      <TodoFilter />
    </div>
    <div>
      <TodoList />
    </div>
  </div>
</template>
