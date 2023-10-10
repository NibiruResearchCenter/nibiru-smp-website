<script setup lang="ts">
const { locale } = useI18n();
const overrideClass = computed(() =>
  locale.value === "nbr-NBR" ? "nibiru-font" : "",
);
</script>

<template>
  <div :class="overrideClass">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
