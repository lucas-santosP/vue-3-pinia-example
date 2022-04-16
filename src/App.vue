<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="root bg-gray-800 text-gray-100 w-full">
    <header
      class="relative flex justify-between border-b-4 border-primary mb-12 px-8 py-4 transition-all"
    >
      <RouterLink
        to="/"
        class="relative w-[100px] !bg-transparent hover:brightness-110 transition-all"
      >
        <img
          alt="Vue logo"
          class="object-cover absolute left-0 top-0 w-[100px]"
          src="@/assets/logo.svg"
        />
      </RouterLink>

      <nav class="flex gap-8">
        <RouterLink class="px-2 rounded-md" :class="route.path === '/' && 'actived'" to="/">
          Home
        </RouterLink>
        <RouterLink class="px-2 rounded-md" :class="route.path === '/todo' && 'actived'" to="/todo">
          Todo
        </RouterLink>
        <RouterLink
          class="px-2 rounded-md"
          :class="route.path === '/about' && 'actived'"
          to="/about"
        >
          About
        </RouterLink>
        <RouterLink
          class="px-2 rounded-md"
          :class="route.path === '/counter' && 'actived'"
          to="/counter"
        >
          Counter
        </RouterLink>
      </nav>
    </header>

    <main class="w-full h-full px-8">
      <RouterView />
    </main>
  </div>
</template>
