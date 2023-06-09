<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { themeChange } from 'theme-change'

onMounted(() => {
  themeChange(false)
})
</script>

<template>
  <RouterView />
</template>
