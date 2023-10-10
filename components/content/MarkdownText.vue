<script setup lang="ts">
defineProps<{
  content: string | null | undefined;
}>();
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <span v-if="content === null">
    <Loading infinity-size="lg" text-size="md" />
  </span>
  <span v-else-if="content === undefined">
    <p>{{ $t("no_translation") }}</p>
  </span>
  <span v-else v-html="$mdRenderer.render(content)" />
</template>
