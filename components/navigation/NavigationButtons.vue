<script setup lang="ts">
defineProps<{
  buttonClass: string;
}>();

const pages = [
  {
    id: "About",
    path: "/about",
  },
  {
    id: "Rules",
    path: "/rules",
  },
  {
    id: "Posts",
    path: "/posts",
  },
  {
    id: "Faq",
    path: "/faq",
  },
];
</script>

<template>
  <nav v-for="page in pages" :key="page.id">
    <NuxtLink :class="buttonClass" :to="page.path">{{ page.id }}</NuxtLink>
  </nav>
</template>
