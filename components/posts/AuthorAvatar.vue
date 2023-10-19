<script setup lang="ts">
defineProps<{
  name: string;
  avatar: string;
}>();
</script>

<template>
  <div>
    <div class="flex align-middle justify-center">
      <div class="avatar h-6 mr-1">
        <img class="rounded-full" :src="useDirectusAsset(avatar)" />
      </div>
      <div class="ml-1 align-middle">
        <span class="text-xl normal-case">{{ name }}</span>
      </div>
    </div>
  </div>
</template>
