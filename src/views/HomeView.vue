<script setup lang="ts">
import PageTitle from "../components/PageTitle.vue";
</script>

<template>
  <PageTitle>Home</PageTitle>

  <p>This is the home page!</p>
  <p>This app is an example of Vue 3 setup using:</p>

  <ul class="list-inside flex flex-col list-disc py-2">
    <li>
      <a target="_blank" href="https://vuejs.org/guide/extras/composition-api-faq.html">
        Composition API
      </a>
    </li>
    <li>
      <a target="_blank" href="https://www.typescriptlang.org">Typescript</a>
    </li>
    <li>
      <a target="_blank" href="https://pinia.vuejs.org">Pinia</a>
    </li>
    <li>
      <a target="_blank" href="https://router.vuejs.org">Vue Router</a>
    </li>
  </ul>

  <p>
    The source code of this app can be found
    <a target="_blank" href="https://github.com/lucas-santosP/vue-3-pinia-example">here.</a>
  </p>
</template>
