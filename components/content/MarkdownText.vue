<script setup lang="ts">
defineProps<{
  content: string;
}>();
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <span v-html="$mdRenderer.render(content)" />
</template>
