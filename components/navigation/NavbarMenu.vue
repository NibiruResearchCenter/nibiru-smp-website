<script setup lang="ts">
import pages from "~/assets/pages.json";
</script>

<template>
  <div class="flex">
    <nav v-for="page in pages" :key="page.key">
      <NuxtLink class="btn btn-ghost text-lg w-24 text-white" :to="page.path">
        {{ $t(page.key) }}
      </NuxtLink>
    </nav>
  </div>
</template>
