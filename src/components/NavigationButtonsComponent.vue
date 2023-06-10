<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  buttonClass: string
}>()

const pages = [
  {
    id: 'nav.pages.about',
    path: '/about'
  },
  {
    id: 'nav.pages.rules',
    path: '/rules'
  },
  {
    id: 'nav.pages.status',
    path: '/status'
  },
  {
    id: 'nav.pages.blog',
    path: '/blog'
  },
  {
    id: 'nav.pages.faq',
    path: '/faq'
  }
]
</script>

<template>
  <nav v-for="page in pages" :key="page.id">
    <RouterLink :class="buttonClass" :to="page.path">{{ $t(page.id) }}</RouterLink>
  </nav>
</template>
