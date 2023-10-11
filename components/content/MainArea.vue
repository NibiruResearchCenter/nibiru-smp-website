<script setup lang="ts">
defineProps<{
  withPadding: boolean;
}>();
</script>

<template>
  <div class="min-h-screen">
    <div class="pt-16" />
    <div
      v-if="withPadding === true"
      class="px-12 py-16 md:px-20 lg:px-40 xl:px-60 2xl:px-72"
    >
      <slot />
    </div>
    <div v-else>
      <slot />
    </div>
  </div>
</template>
