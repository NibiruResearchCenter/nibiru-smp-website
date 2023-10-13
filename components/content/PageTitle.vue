<script setup lang="ts">
const marginPreset = "mx-24 sm:mx-48 md:mx-64 xl:mx-96";

const props = defineProps<{
  title: string;
  withMarginPreset: boolean | undefined | null;
}>();

const extraClass = computed(() => {
  return props.withMarginPreset ? marginPreset : "";
});
</script>

<template>
  <div
    class="text-center rounded-md text-white bg-base-300 bg-opacity-80 py-4 my-8 text-2xl"
    :class="extraClass"
  >
    <h1>{{ title }}</h1>
  </div>
</template>
