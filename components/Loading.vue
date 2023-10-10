<script setup lang="ts">
defineProps<{
  infinitySize: "xs" | "sm" | "md" | "lg";
  textSize: "xs" | "sm" | "md" | "lg" | "xl";
}>();
</script>

<template>
  <span :class="'loading loading-infinity loading-' + infinitySize" />
  <br />
  <span :class="'text-base-content text-' + textSize">Loading...</span>
</template>
