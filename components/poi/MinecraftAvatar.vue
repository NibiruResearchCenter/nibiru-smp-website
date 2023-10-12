<script setup lang="ts">
defineProps<{
  username: string;
  uuid: string;
}>();

const { getAvatar } = useCrafatar();
</script>

<template>
  <div class="flex">
    <div class="avatar h-10 mr-1">
      <div>
        <img
          class="rounded-full"
          :alt="'Avatar of Minecraft Player ' + username"
          :src="getAvatar(uuid)"
        />
      </div>
    </div>
    <div class="ml-1 align-middle">
      <span class="text-xl normal-case">{{ username }}</span>
    </div>
  </div>
</template>
